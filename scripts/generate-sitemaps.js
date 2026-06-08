const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://toppicksbase.com';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const TODAY = new Date().toISOString();

// Load data
const pages = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'pages.json'), 'utf8'));
const posts = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'blog-posts.json'), 'utf8'));
const intents = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'intent-pages.json'), 'utf8'));

// Landing page generation (same logic as build)
const THEMES = ["dark","ancient","holy","fire","ice","shadow","crystal","arcane","infernal","celestial","golden","storm","blood","mystic","royal","eternal","frozen","savage","void","cursed"];
const RACES = ["dragon","elf","dwarf","orc","vampire","demon","angel","undead","phoenix","titan","giant","werewolf","goblin","naga","human"];
const CONTEXTS = ["kingdom","empire","clan","guild","realm","dynasty","order","tribe","legion","alliance","dominion","faction"];
const ADJECTIVES = ["evil","medieval","epic","legendary","mythical","cool","unique","best","powerful","mystical","ancient","forgotten"];

function generateLandingSlugs() {
  const slugs = new Set();
  THEMES.forEach(t => CONTEXTS.forEach(c => slugs.add(`${t}-${c}-names`)));
  RACES.forEach(r => CONTEXTS.forEach(c => slugs.add(`${r}-${c}-names`)));
  ADJECTIVES.forEach(a => CONTEXTS.forEach(c => slugs.add(`${a}-${c}-names`)));
  return [...slugs];
}

const HUB_SLUGS = ["kingdom-names","clan-names","guild-names","dragon-names","demon-names","angel-names","vampire-names","orc-names","elf-names","empire-names"];
const landingSlugs = generateLandingSlugs();

// Sitemap XML helper
function urlEntry(url, changefreq = 'weekly', priority = '0.7') {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function wrapSitemap(entries) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

// ========================================
// 1. Generators (4,500 pages + 20 intents)
// ========================================
const generatorUrls = [];
pages.forEach(p => generatorUrls.push({ url: `${BASE_URL}/${p.slug}`, priority: '0.8', changefreq: 'weekly' }));
intents.forEach(i => generatorUrls.push({ url: `${BASE_URL}/${i.slug}`, priority: '0.8', changefreq: 'weekly' }));

const CHUNK_SIZE = 900;
for (let i = 0; i < generatorUrls.length; i += CHUNK_SIZE) {
  const chunk = generatorUrls.slice(i, i + CHUNK_SIZE);
  const num = Math.floor(i / CHUNK_SIZE) + 1;
  const entries = chunk.map(u => urlEntry(u.url, u.changefreq, u.priority)).join('\n');
  fs.writeFileSync(path.join(PUBLIC_DIR, `sitemap-generators-${num}.xml`), wrapSitemap(entries));
  console.log(`✅ sitemap-generators-${num}.xml (${chunk.length} URLs)`);
}

// ========================================
// 2. Landing Pages (552) + Category Hubs (10)
// ========================================
const landingEntries = [];
landingSlugs.forEach(s => landingEntries.push(urlEntry(`${BASE_URL}/${s}`, 'weekly', '0.7')));
HUB_SLUGS.forEach(s => landingEntries.push(urlEntry(`${BASE_URL}/${s}`, 'weekly', '0.8')));
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-landing.xml'), wrapSitemap(landingEntries.join('\n')));
console.log(`✅ sitemap-landing.xml (${landingEntries.length} URLs)`);

// ========================================
// 3. Blog (115 posts + 8 categories)
// ========================================
const blogEntries = [];
posts.forEach(p => blogEntries.push(urlEntry(`${BASE_URL}/blog/${p.slug}`, 'monthly', '0.7')));
['fantasy','rpg','dnd','worldbuilding','clan','guild','kingdom','roblox'].forEach(cat =>
  blogEntries.push(urlEntry(`${BASE_URL}/blog/category/${cat}`, 'weekly', '0.6'))
);
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-blog.xml'), wrapSitemap(blogEntries.join('\n')));
console.log(`✅ sitemap-blog.xml (${blogEntries.length} URLs)`);

// ========================================
// 4. Static Pages (homepage, about, contact, etc.)
// ========================================
const staticEntries = [
  urlEntry(BASE_URL, 'daily', '1.0'),
  urlEntry(`${BASE_URL}/generators`, 'weekly', '0.7'),
  urlEntry(`${BASE_URL}/about`, 'monthly', '0.5'),
  urlEntry(`${BASE_URL}/contact`, 'monthly', '0.3'),
  urlEntry(`${BASE_URL}/privacy-policy`, 'yearly', '0.1'),
  urlEntry(`${BASE_URL}/terms`, 'yearly', '0.1'),
  urlEntry(`${BASE_URL}/disclaimer`, 'yearly', '0.1'),
  urlEntry(`${BASE_URL}/search`, 'weekly', '0.6'),
  urlEntry(`${BASE_URL}/blog`, 'weekly', '0.7'),
];
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-static.xml'), wrapSitemap(staticEntries.join('\n')));
console.log(`✅ sitemap-static.xml (${staticEntries.length} URLs)`);

// ========================================
// 5. Sitemap Index
// ========================================
const generatorCount = Math.ceil(generatorUrls.length / CHUNK_SIZE);
const sitemaps = [];

for (let i = 1; i <= generatorCount; i++) {
  sitemaps.push(`  <sitemap>
    <loc>${BASE_URL}/sitemap-generators-${i}.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`);
}

sitemaps.push(`  <sitemap>
    <loc>${BASE_URL}/sitemap-landing.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`);
sitemaps.push(`  <sitemap>
    <loc>${BASE_URL}/sitemap-blog.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`);
sitemaps.push(`  <sitemap>
    <loc>${BASE_URL}/sitemap-static.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`);

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.join('\n')}
</sitemapindex>`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), indexXml);
console.log(`✅ sitemap.xml (sitemap index with ${sitemaps.length} entries)`);

// ========================================
// 6. Summary
// ========================================
const totalUrls = generatorUrls.length + landingEntries.length + blogEntries.length + staticEntries.length;
console.log(`\n📊 Total URLs across all sitemaps: ${totalUrls}`);
console.log(`📁 Files generated in public/:`);
console.log(`   sitemap.xml (index)`);
for (let i = 1; i <= generatorCount; i++) console.log(`   sitemap-generators-${i}.xml`);
console.log(`   sitemap-landing.xml`);
console.log(`   sitemap-blog.xml`);
console.log(`   sitemap-static.xml`);

// Save structure report
const report = `# Sitemap Structure Report

**Date**: ${new Date().toISOString().split('T')[0]}
**Base URL**: ${BASE_URL}
**Total URLs**: ${totalUrls}
**Architecture**: Sitemap Index → 8 sub-sitemaps

---

## Sitemap Index

| File | Type | URLs | Max Size |
|------|------|------|----------|
| \`sitemap.xml\` | Index | — | — |

## Sub-sitemaps

| File | URLs | Content |
|------|------|---------|
${Array.from({length: generatorCount}, (_, i) => {
  const start = i * CHUNK_SIZE;
  const end = Math.min(start + CHUNK_SIZE, generatorUrls.length);
  return `| \`sitemap-generators-${i+1}.xml\` | ${end - start} | Generators ${start+1}-${end} |`;
}).join('\n')}
| \`sitemap-landing.xml\` | ${landingEntries.length} | Landing pages (${landingSlugs.length}) + Category hubs (${HUB_SLUGS.length}) |
| \`sitemap-blog.xml\` | ${blogEntries.length} | Blog posts (${posts.length}) + Categories (8) |
| \`sitemap-static.xml\` | ${staticEntries.length} | Homepage, generators, about, contact, etc. |

## Vercel Compatibility

- Each sub-sitemap: ≤ ${CHUNK_SIZE} URLs (well under 50,000 limit)
- Static files in \`public/\` → served directly (no Serverless Function)
- Zero build-time generation overhead for sitemap serving
- Compatible with Google Search Console sitemap index

## Verification

\`\`\`bash
# Check index
curl https://toppicksbase.com/sitemap.xml

# Check sub-sitemap
curl https://toppicksbase.com/sitemap-generators-1.xml

# Count total URLs
curl -s https://toppicksbase.com/sitemap.xml | grep '<loc>' | wc -l
\`\`\`
`;

fs.writeFileSync(path.join(__dirname, '..', 'SITEMAP_STRUCTURE_REPORT.md'), report);
console.log(`\n📄 SITEMAP_STRUCTURE_REPORT.md generated`);

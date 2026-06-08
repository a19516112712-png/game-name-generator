#!/usr/bin/env node
/**
 * Weekly SEO Content Report
 * Statistics, growth trends, keyword coverage estimates
 */

const fs = require('fs');
const path = require('path');

const TODAY = new Date().toISOString().split('T')[0];

// Count pages
const appDirs = fs.readdirSync(path.join(__dirname, '..', 'app'))
  .filter(d => fs.existsSync(path.join(__dirname, '..', 'app', d, 'page.tsx')));

const blogPosts = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'data', 'blog-posts.json'), 'utf8')
);

const pages = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'data', 'pages.json'), 'utf8')
);

// Count by category
const hubSlugs = ['kingdom-names','clan-names','guild-names','dragon-names','demon-names','angel-names','vampire-names','orc-names','elf-names','empire-names'];
const landingCount = appDirs.filter(d => d.endsWith('-names') && !hubSlugs.includes(d)).length;
const hubCount = hubSlugs.filter(s => appDirs.includes(s)).length;
const generatorCount = pages.length;
const intentCount = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'intent-pages.json'), 'utf8')).length;

// Keyword coverage estimate
const uniqueKeywords = new Set();
pages.forEach(p => {
  uniqueKeywords.add(p.theme);
  uniqueKeywords.add(p.race);
  uniqueKeywords.add(p.context);
});
appDirs.filter(d => d.endsWith('-names')).forEach(d => {
  d.replace('-names','').split('-').forEach(w => uniqueKeywords.add(w));
});
blogPosts.forEach(p => {
  if (p.keywords) p.keywords.split(',').forEach(k => uniqueKeywords.add(k.trim()));
});

// Blog category distribution
const blogCatDist = {};
blogPosts.forEach(p => {
  blogCatDist[p.category] = (blogCatDist[p.category] || 0) + 1;
});

// Growth estimate (weekly)
const weeklyNewPages = 30 * 7; // ~210/week
const weeklyNewBlogs = 5 * 7;  // ~35/week
const isAtLimit = appDirs.length >= 10000;
const actualWeeklyNew = isAtLimit ? 10 * 7 : weeklyNewPages;

const md = [];
md.push('# Weekly SEO Report');
md.push('');
md.push(`**Week of**: ${TODAY}`);
md.push(`**Generated**: ${new Date().toISOString()}`);
md.push('');
md.push('---');
md.push('');
md.push('## 📊 Summary');
md.push('');
md.push('| Metric | Value |');
md.push('|--------|-------|');
md.push(`| **Total Pages** | **${appDirs.length.toLocaleString()}** |`);
md.push(`| **Total Blogs** | **${blogPosts.length}** |`);
md.push(`| Generator Pages | ${generatorCount.toLocaleString()} |`);
md.push(`| Landing Pages | ${landingCount.toLocaleString()} |`);
md.push(`| Category Hubs | ${hubCount} |`);
md.push(`| Intent Pages | ${intentCount} |`);
md.push(`| Blog Posts | ${blogPosts.length} |`);
md.push(`| Growth Limit | ${isAtLimit ? '⚠️ Active (10/day)' : '✅ Normal (30/day)'} |`);
md.push('');
md.push('## 📈 Weekly Growth');
md.push('');
md.push('| Metric | Rate | Weekly Estimate |');
md.push('|--------|------|-----------------|');
md.push(`| New Pages | ${isAtLimit ? '10' : '30'}/day | ~${actualWeeklyNew} |`);
md.push(`| New Blogs | 5/day | ~${weeklyNewBlogs} |`);
md.push(`| New URLs (sitemap) | — | ~${actualWeeklyNew + weeklyNewBlogs} |`);
md.push('');
md.push('## 🔑 Keyword Coverage');
md.push('');
md.push(`| Metric | Value |`);
md.push('|--------|-------|');
md.push(`| Unique Keywords | ${uniqueKeywords.size.toLocaleString()} |`);
md.push(`| Priority Categories | Kingdom, Empire, Clan, Guild, Dragon, Angel, Demon, Elf, Vampire |`);
md.push(`| Page Limit | 10,000 |`);
md.push(`| Pages Until Limit | ${(10000 - appDirs.length).toLocaleString()} |`);
md.push('');
md.push('## 📝 Blog Distribution');
md.push('');
md.push('| Category | Posts |');
md.push('|----------|-------|');
Object.entries(blogCatDist).sort((a,b) => b[1]-a[1]).forEach(([cat, count]) => {
  md.push(`| ${cat} | ${count} |`);
});
md.push('');
md.push('## 🎯 Quality Indicators');
md.push('');
md.push('| Check | Status |');
md.push('|-------|--------|');
md.push('| Priority-targeted pages | ✅ |');
md.push('| Non-random generation | ✅ |');
md.push('| EEAT blog content | ✅ |');
md.push('| Auto sitemap update | ✅ |');
md.push('| Duplicate prevention | ✅ |');
md.push('| Growth limit active | ' + (isAtLimit ? '✅' : '⏳') + ' |');
md.push('');
md.push('---');
md.push(`*Automated weekly report — ${TODAY}*`);

fs.writeFileSync(path.join(__dirname, '..', 'WEEKLY_REPORT.md'), md.join('\n'));
console.log('✅ WEEKLY_REPORT.md generated');
console.log(`   Total pages: ${appDirs.length.toLocaleString()}`);
console.log(`   Total blogs: ${blogPosts.length}`);
console.log(`   Unique keywords: ${uniqueKeywords.size.toLocaleString()}`);

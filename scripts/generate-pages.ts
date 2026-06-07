import fs from "node:fs";
import path from "node:path";

// --- Load data ---
const dataDir = path.resolve(__dirname, "../data");

const themes: string[] = JSON.parse(
  fs.readFileSync(path.join(dataDir, "themes.json"), "utf-8")
);
const races: string[] = JSON.parse(
  fs.readFileSync(path.join(dataDir, "races.json"), "utf-8")
);
const contexts: string[] = JSON.parse(
  fs.readFileSync(path.join(dataDir, "contexts.json"), "utf-8")
);

// --- Generate all combinations ---
interface PageEntry {
  slug: string;
  title: string;
  theme: string;
  race: string;
  context: string;
}

const pages: PageEntry[] = [];

for (const theme of themes) {
  for (const race of races) {
    for (const context of contexts) {
      const slug = `${theme.toLowerCase()}-${race.toLowerCase()}-${context.toLowerCase()}-name-generator`;
      const title = `${theme} ${race} ${context} Name Generator`;

      pages.push({ slug, title, theme, race, context });
    }
  }
}

// --- Sort alphabetically by slug ---
pages.sort((a, b) => a.slug.localeCompare(b.slug));

// --- Write output ---
const outPath = path.join(dataDir, "pages.json");
fs.writeFileSync(outPath, JSON.stringify(pages, null, 2));

const count = pages.length;
console.log(`✅ Generated ${count} pages → data/pages.json`);
console.log(`   (${themes.length} themes × ${races.length} races × ${contexts.length} contexts)`);

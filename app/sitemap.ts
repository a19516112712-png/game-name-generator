import type { MetadataRoute } from "next";
import pages from "@/data/pages.json";
import posts from "@/data/blog-posts.json";
import intents from "@/data/intent-pages.json";

// Category hub slugs
const HUB_SLUGS = [
  "kingdom-names","clan-names","guild-names","dragon-names",
  "demon-names","angel-names","vampire-names","orc-names","elf-names",
];

// Landing page generation (same as build script)
const THEMES = ["dark","ancient","holy","fire","ice","shadow","crystal","arcane","infernal","celestial","golden","storm","blood","mystic","royal","eternal","frozen","savage","void","cursed"];
const RACES = ["dragon","elf","dwarf","orc","vampire","demon","angel","undead","phoenix","titan","giant","werewolf","goblin","naga","human"];
const CONTEXTS = ["kingdom","empire","clan","guild","realm","dynasty","order","tribe","legion","alliance","dominion","faction"];
const ADJECTIVES = ["evil","medieval","epic","legendary","mythical","cool","unique","best","powerful","mystical","ancient","forgotten"];

function generateLandingSlugs(): string[] {
  const slugs = new Set<string>();
  THEMES.forEach(t => CONTEXTS.forEach(c => slugs.add(`${t}-${c}-names`)));
  RACES.forEach(r => CONTEXTS.forEach(c => slugs.add(`${r}-${c}-names`)));
  ADJECTIVES.forEach(a => CONTEXTS.forEach(c => slugs.add(`${a}-${c}-names`)));
  return [...slugs];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toppicksbase.com";

  const staticPages = [
    { url: baseUrl, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.1 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly" as const, priority: 0.1 },
    { url: `${baseUrl}/disclaimer`, changeFrequency: "yearly" as const, priority: 0.1 },
    { url: `${baseUrl}/generators`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/search`, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  const routes: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: p.url,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  // Generator pages
  for (const page of pages) {
    routes.push({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Landing pages
  const landingSlugs = generateLandingSlugs();
  for (const slug of landingSlugs) {
    routes.push({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // Category hubs
  for (const slug of HUB_SLUGS) {
    routes.push({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Blog posts
  for (const post of posts) {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Blog categories
  const categorySlugs = ["fantasy","rpg","dnd","worldbuilding","clan","guild","kingdom","roblox"];
  for (const cat of categorySlugs) {
    routes.push({
      url: `${baseUrl}/blog/category/${cat}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  // Intent pages
  for (const intent of intents) {
    routes.push({
      url: `${baseUrl}/${intent.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  return routes;
}

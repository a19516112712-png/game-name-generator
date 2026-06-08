import type { MetadataRoute } from "next";
import pages from "@/data/pages.json";
import posts from "@/data/blog-posts.json";
import intents from "@/data/intent-pages.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toppicksbase.com";

  const staticPages = [
    { url: baseUrl, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.1 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly" as const, priority: 0.1 },
    { url: `${baseUrl}/disclaimer`, changeFrequency: "yearly" as const, priority: 0.1 },
    { url: `${baseUrl}/search`, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  const routes: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: p.url,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  for (const page of pages) {
    routes.push({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const post of posts) {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  const categorySlugs = ["fantasy","rpg","dnd","worldbuilding","clan","guild","kingdom","roblox"];
  for (const cat of categorySlugs) {
    routes.push({
      url: `${baseUrl}/blog/category/${cat}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

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

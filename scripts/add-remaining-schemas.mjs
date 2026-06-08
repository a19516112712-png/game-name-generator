import fs from "node:fs";

// === 4. Intent page component ===
let intentComp = fs.readFileSync("components/intent-page.tsx", "utf-8");

intentComp = intentComp.replace(
  'import intents from "@/data/intent-pages.json";',
  'import intents from "@/data/intent-pages.json";\nimport { JsonLd } from "@/components/json-ld";\nimport { webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";'
);

const intentSchemas = `
      <JsonLd data={webPageSchema(
        intent.title,
        intent.description,
        \`https://toppicksbase.com/\${intent.slug}\`
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://toppicksbase.com" },
        { name: intent.title, url: \`https://toppicksbase.com/\${intent.slug}\` }
      ])} />
      <JsonLd data={faqSchema(faqs)} />`;

intentComp = intentComp.replace("    </article>", intentSchemas + "\n    </article>");
fs.writeFileSync("components/intent-page.tsx", intentComp);
console.log("4. Intent page schemas added");

// === 5. Blog index page ===
let blogIndex = fs.readFileSync("app/blog/page.tsx", "utf-8");

blogIndex = blogIndex.replace(
  'import posts from "@/data/blog-posts.json";',
  'import posts from "@/data/blog-posts.json";\nimport { JsonLd } from "@/components/json-ld";\nimport { webPageSchema, breadcrumbSchema } from "@/lib/schema";'
);

const blogIndexSchemas = `
      <JsonLd data={webPageSchema(
        "Blog — Game Name Generator Hub",
        "Read our blog for fantasy naming guides, RPG worldbuilding tips, gaming community advice, and creative inspiration.",
        "https://toppicksbase.com/blog"
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://toppicksbase.com" },
        { name: "Blog", url: "https://toppicksbase.com/blog" }
      ])} />`;

blogIndex = blogIndex.replace("    </article>", blogIndexSchemas + "\n    </article>");
fs.writeFileSync("app/blog/page.tsx", blogIndex);
console.log("5. Blog index schemas added");

// === 6. Static pages (about, contact, privacy, terms, disclaimer) ===
const staticPages = ["about", "contact", "privacy-policy", "terms", "disclaimer"];
const titles = {
  "about": "About Us — Game Name Generator Hub",
  "contact": "Contact Us — Game Name Generator Hub",
  "privacy-policy": "Privacy Policy — Game Name Generator Hub",
  "terms": "Terms of Service — Game Name Generator Hub",
  "disclaimer": "Disclaimer — Game Name Generator Hub",
};
const descs = {
  "about": "Learn about Game Name Generator Hub, the largest fantasy name generator with 4,500+ unique name generators.",
  "contact": "Get in touch with Game Name Generator Hub. We welcome feedback, suggestions, and partnership inquiries.",
  "privacy-policy": "Privacy Policy for Game Name Generator Hub. Learn how we handle your data.",
  "terms": "Terms of Service for Game Name Generator Hub. Read our terms and conditions.",
  "disclaimer": "Disclaimer for Game Name Generator Hub. Understand the limitations and scope of our name generation service.",
};

for (const page of staticPages) {
  let content = fs.readFileSync(`app/${page}/page.tsx`, "utf-8");
  
  content = content.replace(
    'import type { Metadata } from "next";',
    'import type { Metadata } from "next";\nimport { JsonLd } from "@/components/json-ld";\nimport { webPageSchema, breadcrumbSchema } from "@/lib/schema";'
  );

  const schemas = `
      <JsonLd data={webPageSchema(
        "${titles[page]}",
        "${descs[page]}",
        \`https://toppicksbase.com/${page}\`
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://toppicksbase.com" },
        { name: "${titles[page].split(' — ')[0]}", url: \`https://toppicksbase.com/${page}\` }
      ])} />`;

  content = content.replace("    </article>", schemas + "\n    </article>");
  fs.writeFileSync(`app/${page}/page.tsx`, content);
}
console.log("6. Static page schemas added");

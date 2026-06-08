import fs from "node:fs";

// === 2. [slug]/page.tsx - add FAQ + WebPage + Breadcrumb schema ===
let slugPage = fs.readFileSync("app/[slug]/page.tsx", "utf-8");

slugPage = slugPage.replace(
  'import { generateContent } from "@/lib/content";',
  'import { generateContent } from "@/lib/content";\nimport { JsonLd } from "@/components/json-ld";\nimport { webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";'
);

// Add base URL constant before the component
slugPage = slugPage.replace(
  'export default async function GamePage',
  'const BASE_URL = "https://toppicksbase.com";\n\nexport default async function GamePage'
);

// Add schemas before closing </article>
const slugSchemas = `
      <JsonLd data={webPageSchema(
        page.title,
        \`Generate unique \${page.theme} \${page.race} \${page.context} names with meanings, lore and fantasy inspiration.\`,
        \`\${BASE_URL}/\${page.slug}\`
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: BASE_URL },
        { name: page.title, url: \`\${BASE_URL}/\${page.slug}\` }
      ])} />
      <JsonLd data={faqSchema(content.faqs)} />`;

slugPage = slugPage.replace("    </article>", slugSchemas + "\n    </article>");
fs.writeFileSync("app/[slug]/page.tsx", slugPage);
console.log("2. [slug] FAQ schemas added");

// === 3. blog/[slug]/page.tsx - add Article + Breadcrumb schema ===
let blogPage = fs.readFileSync("app/blog/[slug]/page.tsx", "utf-8");

blogPage = blogPage.replace(
  'import pages from "@/data/pages.json";',
  'import pages from "@/data/pages.json";\nimport { JsonLd } from "@/components/json-ld";\nimport { webPageSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";'
);

const blogSchemas = `
      <JsonLd data={webPageSchema(
        post.title,
        post.description,
        \`https://toppicksbase.com/blog/\${post.slug}\`
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://toppicksbase.com" },
        { name: "Blog", url: "https://toppicksbase.com/blog" },
        { name: post.title, url: \`https://toppicksbase.com/blog/\${post.slug}\` }
      ])} />
      <JsonLd data={articleSchema(
        post.title,
        post.description,
        \`https://toppicksbase.com/blog/\${post.slug}\`,
        post.date,
        post.category
      )} />`;

blogPage = blogPage.replace("    </article>", blogSchemas + "\n    </article>");
fs.writeFileSync("app/blog/[slug]/page.tsx", blogPage);
console.log("3. Blog Article schemas added");

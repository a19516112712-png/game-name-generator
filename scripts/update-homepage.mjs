import fs from "node:fs";

let home = fs.readFileSync("app/page.tsx", "utf-8");

// 1. Add Hero CTA buttons right after the subtitle paragraph
const heroButtons = `
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/search"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-gray-950 transition hover:bg-gray-200"
          >
            Explore Generators →
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-gray-400"
          >
            Read Naming Guides →
          </Link>
        </div>`;

// Insert after the subtitle p tag - find the closing </p> after "4,500+ Free Fantasy"
const subtitleEnd = "4,500+ Free Fantasy Name Generators for Worldbuilders, RPG Players &amp; Writers\n        </p>";
home = home.replace(subtitleEnd, subtitleEnd + heroButtons);

// 2. Add Content Hub "Learn Fantasy Naming" section before Featured Generators
const contentHub = `
      {/* Content Hub: Learn Fantasy Naming */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Learn Fantasy Naming</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Master the art of fantasy naming with our in-depth guides covering
          every aspect of creating memorable names for your worlds, characters,
          and gaming communities.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: "RPG Naming", href: "/blog" },
            { label: "D&D Naming", href: "/blog" },
            { label: "Worldbuilding", href: "/blog" },
            { label: "Clan Naming", href: "/blog" },
            { label: "Kingdom Naming", href: "/blog" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl border border-gray-800 bg-gray-900 p-5 text-center transition hover:border-gray-600 hover:bg-gray-800"
            >
              <span className="font-semibold text-white">{item.label}</span>
              <p className="mt-1 text-xs text-gray-500">View guides →</p>
            </Link>
          ))}
        </div>
      </section>`;

// Insert before Featured Generators section
home = home.replace(
  "      {/* ========================================\n          5. Featured Generators",
  contentHub + "\n      {/* ========================================\n          5. Featured Generators"
);

// 3. Add Latest Articles section after Featured Generators (already has blog posts import)
// Update the existing latest articles section with better styling
const betterArticles = `
      {/* Latest Articles */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition">
            View All Articles →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <Link
              key={post.slug}
              href={\`/blog/\${post.slug}\`}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-600 hover:bg-gray-800"
            >
              <span className="mb-2 inline-block rounded-full border border-gray-700 px-2 py-0.5 text-xs text-gray-400">
                {post.category}
              </span>
              <h3 className="mb-2 text-sm font-semibold text-white leading-snug">
                {post.title}
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-gray-500 line-clamp-2">
                {post.description.slice(0, 120)}
                {post.description.length > 120 ? "..." : ""}
              </p>
              <span className="text-xs text-gray-600">
                {post.date} · {post.readTime}
              </span>
            </Link>
          ))}
        </div>
      </section>`;

// Replace old latest articles section
home = home.replace(
  /\/\* Latest Articles \*\/[\s\S]*?\/\* AdSense Ready Section \*\//,
  betterArticles + "\n      {/* AdSense Ready Section */"
);

fs.writeFileSync("app/page.tsx", home);
console.log("Homepage updated: Hero buttons + Content Hub + Latest Articles");

import fs from "node:fs";

let home = fs.readFileSync("app/page.tsx", "utf-8");

// ================================================================
// 1. Popular Topics (8 categories) - after Popular Categories, before Content Hub
// ================================================================
const popularTopics = `
      {/* Popular Topics */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Popular Topics</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Explore our most popular naming topics. Each category contains expert
          guides, hundreds of name examples, and curated resources.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Fantasy Names", desc: "Worlds, kingdoms & realms", href: "/blog/category/fantasy", color: "from-purple-900 to-indigo-900" },
            { label: "RPG Names", desc: "Characters, NPCs & campaigns", href: "/blog/category/rpg", color: "from-blue-900 to-cyan-900" },
            { label: "D&D Names", desc: "Dungeon Master resources", href: "/blog/category/dnd", color: "from-red-900 to-orange-900" },
            { label: "Clan Names", desc: "Gaming, esports & fantasy", href: "/blog/category/clan", color: "from-green-900 to-emerald-900" },
            { label: "Guild Names", desc: "MMORPG & online communities", href: "/blog/category/guild", color: "from-yellow-900 to-amber-900" },
            { label: "Kingdom Names", desc: "Medieval & fantasy realms", href: "/blog/category/kingdom", color: "from-pink-900 to-rose-900" },
            { label: "Worldbuilding", desc: "Maps, cultures & lore", href: "/blog/category/worldbuilding", color: "from-teal-900 to-cyan-900" },
            { label: "Roblox Names", desc: "Games, groups & usernames", href: "/blog/category/roblox", color: "from-gray-700 to-gray-800" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group rounded-2xl border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-600 hover:bg-gray-800"
            >
              <h3 className="font-semibold text-white group-hover:underline">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>`;

home = home.replace(
  '      {/* ========================================\n          6. Content Hub: Learn Fantasy Naming',
  popularTopics + '\n      {/* ========================================\n          6. Content Hub: Learn Fantasy Naming'
);

// ================================================================
// 2. Featured Guides (3 featured blog posts) - after Content Hub, before FAQ
// ================================================================
const featuredGuides = `
      {/* Featured Guides */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Guides</h2>
          <Link href="/blog" className="text-sm text-gray-400 transition hover:text-white">
            View all guides →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={\`/blog/\${post.slug}\`}
              className="group flex flex-col rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-gray-600 hover:bg-gray-800"
            >
              <span className="mb-3 inline-block w-fit rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                {post.category}
              </span>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-white group-hover:underline">
                {post.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
                {post.description.slice(0, 100)}…
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{post.date}</span>
                <span className="text-white/60 group-hover:text-white transition">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>`;

home = home.replace(
  '      {/* ========================================\n          7. FAQ',
  featuredGuides + '\n      {/* ========================================\n          7. FAQ'
);

// ================================================================
// 3. Trending Generators (12) - after FAQ, before Featured Generators
// ================================================================
const trendingGenerators = `
      {/* Trending Generators */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Trending Generators</h2>
          <Link href="/search" className="text-sm text-gray-400 transition hover:text-white">
            Explore all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(() => {
            const trending = [
              "dark-elf-kingdom-name-generator",
              "fire-dragon-empire-name-generator",
              "holy-angel-realm-name-generator",
              "crystal-phoenix-dynasty-name-generator",
              "shadow-vampire-clan-name-generator",
              "infernal-demon-legion-name-generator",
              "arcane-elf-order-name-generator",
              "storm-orc-tribe-name-generator",
              "ancient-dwarf-guild-name-generator",
              "celestial-angel-alliance-name-generator",
              "cursed-undead-dominion-name-generator",
              "void-dragon-nation-name-generator",
            ].map(slug => pages.find(p => p.slug === slug)).filter(Boolean);
            return trending.map((page) => (
              <Link
                key={page.slug}
                href={\`/\${page.slug}\`}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition hover:border-gray-600 hover:bg-gray-800"
              >
                <span className="text-sm font-medium text-white">{page.title}</span>
                <p className="mt-1 text-xs text-gray-500">
                  {page.theme} · {page.race} · {page.context}
                </p>
              </Link>
            ));
          })()}
        </div>
      </section>`;

home = home.replace(
  '      {/* ========================================\n          8. Featured Generators',
  trendingGenerators + '\n      {/* ========================================\n          8. Featured Generators'
);

// ================================================================
// Fix section numbering comments
// ================================================================
home = home.replace('6. Content Hub: Learn Fantasy Naming', '7. Content Hub: Learn Fantasy Naming');
home = home.replace('7. FAQ', '9. FAQ');
home = home.replace('8. Featured Generators', '10. Featured Generators');
home = home.replace('9. Latest Fantasy Naming Guides', '11. Latest Fantasy Naming Guides');
home = home.replace('10. Fantasy Naming Resources', '12. Fantasy Naming Resources');
home = home.replace('11. More Than a Name List', '13. More Than a Name List');
home = home.replace('12. Why Use Our Generators', '14. Why Use Our Generators');
home = home.replace('13. CTA', '15. CTA');

fs.writeFileSync("app/page.tsx", home);
console.log("3 sections inserted: Popular Topics, Featured Guides, Trending Generators");

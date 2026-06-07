import type { Metadata } from "next";
import Link from "next/link";
import pages from "@/data/pages.json";
import posts from "@/data/blog-posts.json";
import HomeBlogPreview from "@/components/home-blog-preview";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, webSiteSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Game Name Generator Hub — 4,500+ Fantasy Name Generators",
  description:
    "Generate unique fantasy names for kingdoms, empires, clans, guilds and more. 20 themes, 15 races, 15 contexts — 4,500+ free name generators with meanings and lore.",
};

const featuredSlugs = [
  "dark-elf-kingdom-name-generator",
  "fire-dragon-empire-name-generator",
  "holy-angel-realm-name-generator",
  "ancient-dwarf-guild-name-generator",
  "shadow-vampire-clan-name-generator",
  "crystal-phoenix-dynasty-name-generator",
  "arcane-elf-order-name-generator",
  "infernal-demon-legion-name-generator",
  "celestial-angel-alliance-name-generator",
  "storm-orc-tribe-name-generator",
  "golden-dragon-dominion-name-generator",
  "void-undead-nation-name-generator",
];

const featuredPages = featuredSlugs
  .map((slug) => pages.find((p) => p.slug === slug))
  .filter(Boolean) as typeof pages;

const popularCategories = [
  { label: "Dark Names", slug: "dark-elf-kingdom-name-generator" },
  { label: "Dragon Names", slug: "fire-dragon-empire-name-generator" },
  { label: "Kingdom Names", slug: "dark-elf-kingdom-name-generator" },
  { label: "Demon Names", slug: "infernal-demon-legion-name-generator" },
  { label: "Angel Names", slug: "holy-angel-realm-name-generator" },
  { label: "Clan Names", slug: "shadow-vampire-clan-name-generator" },
  { label: "Empire Names", slug: "fire-dragon-empire-name-generator" },
  { label: "Vampire Names", slug: "shadow-vampire-clan-name-generator" },
  { label: "Guild Names", slug: "ancient-dwarf-guild-name-generator" },
  { label: "Orc Names", slug: "storm-orc-tribe-name-generator" },
  { label: "Undead Names", slug: "void-undead-nation-name-generator" },
  { label: "Holy Names", slug: "holy-angel-realm-name-generator" },
  { label: "Fire Names", slug: "fire-dragon-empire-name-generator" },
  { label: "Ice Names", slug: "ice-dwarf-kingdom-name-generator" },
  { label: "Storm Names", slug: "storm-orc-tribe-name-generator" },
  { label: "Arcane Names", slug: "arcane-elf-order-name-generator" },
  { label: "Cursed Names", slug: "cursed-undead-dominion-name-generator" },
  { label: "Phoenix Names", slug: "crystal-phoenix-dynasty-name-generator" },
  { label: "Dwarf Names", slug: "ancient-dwarf-guild-name-generator" },
  { label: "Elf Names", slug: "dark-elf-kingdom-name-generator" },
];

export default function HomePage() {
  return (
    <article>
      {/* ========================================
          1. Hero
          ======================================== */}
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
          Game Name Generator Hub
        </h1>
        <p className="mb-6 text-xl text-gray-300">
          4,500+ Free Fantasy Name Generators for Worldbuilders, RPG Players
          &amp; Writers
        </p>
        <div className="flex flex-wrap gap-4">
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
        </div>
      </section>

      {/* ========================================
          2. Search
          ======================================== */}
      <section className="mb-16 rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <form action="/search" method="GET" className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            name="q"
            placeholder="Search 4,500+ name generators..."
            className="flex-1 rounded-xl border border-gray-700 bg-gray-800 px-5 py-3 text-white placeholder-gray-500 outline-none transition focus:border-gray-500"
          />
          <button
            type="submit"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-gray-950 transition hover:bg-gray-200"
          >
            Search Generators
          </button>
        </form>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span>Popular:</span>
          {["dragon","elf","kingdom","guild","minecraft","demon","angel","clan","fantasy","roblox"].map(kw => (
            <Link key={kw} href={`/search?q=${kw}`} className="underline hover:text-gray-300">{kw}</Link>
          ))}
        </div>
      </section>

      {/* ========================================
          3. What Is
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">What Is Game Name Generator Hub</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            Welcome to <strong className="text-white">Game Name Generator Hub</strong>,
            the largest collection of fantasy name generators on the web. Whether
            you are naming a dark elf kingdom for your Dungeons &amp; Dragons
            campaign, creating a fire dragon empire for your novel, or building a
            holy angel realm for your video game, we have you covered with over
            four thousand five hundred unique generators.
          </p>
          <p>
            Our generators cover <strong className="text-white">20 magical themes</strong>
            — from Dark and Shadow to Celestial and Eternal — combined with{" "}
            <strong className="text-white">15 fantasy races</strong> including
            Elves, Dragons, Vampires, and Phoenixes, across{" "}
            <strong className="text-white">15 types of organizations</strong> —
            Kingdoms, Empires, Clans, Guilds, Legions, Realms, Factions, Teams,
            Squads, Nations, Dynasties, Orders, Tribes, Alliances, and
            Dominions. Every single generator produces 100 unique names with
            meanings, plus 20 featured names with detailed lore and backstory.
            That means across our entire platform, you have access to over
            450,000 unique fantasy names, each one ready to inspire your next
            creative project.
          </p>
        </div>
      </section>

      {/* ========================================
          4. How It Works
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">How It Works</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1", title: "Choose a Theme", desc: "Pick from 20 themes like Dark, Arcane, Infernal, or Celestial to set the magical tone." },
            { step: "2", title: "Select a Race", desc: "Choose from 15 fantasy races — Elves, Orcs, Dragons, Vampires, Titans, and more." },
            { step: "3", title: "Pick a Context", desc: "Select the organization type: Kingdom, Empire, Clan, Guild, Legion, or 9 other options." },
            { step: "4", title: "Get Your Names", desc: "Instantly receive 100 names with meanings, 20 featured names with lore, plus guides and FAQs." },
          ].map((item) => (
            <div key={item.step} className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <div className="mb-3 text-3xl font-extrabold text-gray-600">{item.step}</div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          5. Popular Categories
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Popular Categories</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Not sure where to start? Browse our most popular name generator
          categories. With over 90,000 internal links connecting all 4,500
          pages, every generator is just a few clicks away.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {popularCategories.map((cat) => (
            <Link
              key={cat.label}
              href={`/${cat.slug}`}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-3 text-sm text-gray-300 transition hover:border-gray-600 hover:text-white"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>


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
      </section>
      {/* ========================================
          7. Content Hub: Learn Fantasy Naming
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Learn Fantasy Naming</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Master the art of fantasy naming with our in-depth guides covering
          every aspect of creating memorable names for your worlds, characters,
          and gaming communities.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "RPG Naming Guides", href: "/blog" },
            { label: "D&D Naming Guides", href: "/blog" },
            { label: "Kingdom Naming Guides", href: "/blog" },
            { label: "Clan Naming Guides", href: "/blog" },
            { label: "Guild Naming Guides", href: "/blog" },
            { label: "Roblox Naming Guides", href: "/blog" },
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
      </section>


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
              href={`/blog/${post.slug}`}
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
      </section>
      {/* ========================================
          9. FAQ
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is Game Name Generator Hub?",
              a: "Game Name Generator Hub is a free online tool that generates fantasy names for kingdoms, empires, clans, guilds, nations, and other organizations. We combine magical themes with fantasy races and organization types to create unique, meaningful names complete with lore and backstory. With 4,500+ generators producing 100+ names each, we offer over 450,000 unique name combinations.",
            },
            {
              q: "Are the generated names free to use?",
              a: "Yes! All names generated on our platform are free for both personal and commercial use. You can use them in your D&D campaigns, fantasy novels, video games, worldbuilding projects, tabletop RPGs like Pathfinder, or any creative endeavor without attribution or payment.",
            },
            {
              q: "How many name generators are available?",
              a: "We currently offer 4,500 unique name generators, created by combining 20 themes, 15 races, and 15 contexts. Each generator produces 100 name examples with meanings, plus 20 featured names with detailed lore.",
            },
            {
              q: "How are the names generated?",
              a: "Our names are generated through a deterministic, rule-based template system. We combine carefully crafted word pools, theme-specific prefixes, and context-appropriate suffixes to produce names that feel authentic to each fantasy combination.",
            },
            {
              q: "Will the same page always show the same names?",
              a: "Yes! We use seeded generation, which means the same generator page will always produce exactly the same names. This makes our generators reliable — you can bookmark a page, share it with friends, and the results will always be consistent.",
            },
            {
              q: "How do I find related generators?",
              a: "Every generator page includes four categories of related links: Related by Theme, Related by Race, Related by Context, and Popular Generators. This internal linking system, with over 90,000 total internal links across all pages, means you are never more than three clicks from any other generator.",
            },
          ].map((faq, i) => (
            <details key={i} className="group rounded-xl border border-gray-800 bg-gray-900">
              <summary className="cursor-pointer p-5 font-medium text-white">{faq.q}</summary>
              <p className="border-t border-gray-800 px-5 pb-5 pt-4 leading-relaxed text-gray-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>


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
            ].map(slug => pages.find(p => p.slug === slug)).filter(Boolean) as typeof pages;
            return trending.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
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
      </section>
      {/* ========================================
          10. Featured Generators
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Featured Generators</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Here are some of our most popular name generators. Each one includes
          100 name examples, 20 featured names with lore, a detailed naming
          guide, introduction article, and FAQs.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPages.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-600 hover:bg-gray-800"
            >
              <h3 className="mb-1 font-semibold text-white">{page.title}</h3>
              <p className="text-sm text-gray-500">{page.theme} · {page.race} · {page.context}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================
          11. Latest Fantasy Naming Guides
          ======================================== */}
      <HomeBlogPreview />

      {/* ========================================
          12. Fantasy Naming Resources
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Fantasy Naming Resources</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Dive deeper into specific naming topics with our curated resource
          guides. Each guide covers a complete naming domain with expert tips,
          examples, and best practices.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "RPG Naming Guides", desc: "Character, world, and campaign naming for tabletop RPGs", href: "/blog" },
            { label: "D&D Naming Guides", desc: "Dungeon Master tips for naming NPCs, kingdoms, and artifacts", href: "/blog" },
            { label: "Kingdom Naming Guides", desc: "Create authentic, memorable kingdom names for any fantasy setting", href: "/blog" },
            { label: "Clan Naming Guides", desc: "Powerful clan names for gaming, fantasy, and esports", href: "/blog" },
            { label: "Guild Naming Guides", desc: "MMORPG guild names that attract members and build community", href: "/blog" },
            { label: "Roblox Naming Guides", desc: "Game and group names that stand out on the Roblox platform", href: "/blog" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-600 hover:bg-gray-800"
            >
              <h3 className="font-semibold text-white">{item.label}</h3>
              <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================
          13. More Than a Name List
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">More Than Just a Name List</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            Unlike simple random name generators that spit out a list and call
            it a day, Game Name Generator Hub treats every generator as a full
            resource page. When you visit a generator like Dark Elf Kingdom, you
            get much more than just 100 names.
          </p>
          <p>
            The introduction article explains the history and cultural context.
            The naming guide breaks down the linguistic patterns. Each of the
            100 name examples includes a meaning. The 20 featured names go
            further with full paragraphs of lore — origin stories, founding
            myths, and legendary figures.
          </p>
        </div>
      </section>

      {/* ========================================
          14. Why Use Our Generators
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Why Use Our Name Generators?</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            Naming is one of the hardest parts of worldbuilding. A great name
            sets the tone for an entire civilization. Our generators take the
            guesswork out of naming by combining consistent thematic elements
            with cultural depth, ensuring every name feels authentic.
          </p>
          <p>
            Each generator is a complete resource, not just a list of names. The
            introduction article provides context. The naming guide explains
            patterns. The 100 name examples show the range. The 20 featured
            names dive deep with paragraphs of lore. And the FAQ section answers
            common questions.
          </p>
          <p>
            Best of all, everything is <strong className="text-white">completely free</strong>.
            No sign-ups, no subscriptions, no hidden fees. We believe creativity
            tools should be accessible to everyone.
          </p>
        </div>
      </section>

      {/* ========================================
          15. CTA
          ======================================== */}
      <section className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to Start Generating?</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Browse our 4,500+ fantasy name generators and find the perfect name
          for your kingdom, empire, clan, guild, or any fantasy organization.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/dark-elf-kingdom-name-generator" className="rounded-xl bg-white px-6 py-3 font-semibold text-gray-950 transition hover:bg-gray-200">
            Try Dark Elf Kingdom →
          </Link>
          <Link href="/fire-dragon-empire-name-generator" className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:border-gray-500">
            Try Fire Dragon Empire →
          </Link>
        </div>
      </section>

      {/* Schemas */}
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={webPageSchema("Game Name Generator Hub — 4,500+ Fantasy Name Generators", "Generate unique fantasy names for kingdoms, empires, clans, guilds and more.", "https://game-name-generator-hub.com")} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://game-name-generator-hub.com" }])} />
    </article>
  );
}

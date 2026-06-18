import type { Metadata } from "next";
import Link from "next/link";
import pages from "@/data/pages.json";
import posts from "@/data/blog-posts.json";
import HomeBlogPreview from "@/components/home-blog-preview";
import GeneratorExplorer from "@/components/generator-explorer";
import AdPlaceholder from "@/components/ad-placeholder";
import HomeFAQ from "@/components/home-faq";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, webSiteSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Game Name Generator Hub — 4,500+ Fantasy Name Generators",
  description:
    "Generate unique fantasy names for kingdoms, empires, clans, guilds and more. 20 themes, 15 races, 15 contexts — 4,500+ free name generators with meanings and lore.",
  alternates: {
    canonical: "https://toppicksbase.com",
  },
  openGraph: {
    title: "Game Name Generator Hub — 4,500+ Fantasy Name Generators",
    description: "Generate unique fantasy names for kingdoms, empires, clans, guilds and more. 20 themes, 15 races, 15 contexts — 4,500+ free name generators with meanings and lore.",
    type: "website",
  },
  twitter: {
    title: "Game Name Generator Hub — 4,500+ Fantasy Name Generators",
    description: "Generate unique fantasy names for kingdoms, empires, clans, guilds and more. 20 themes, 15 races, 15 contexts — 4,500+ free name generators with meanings and lore.",
  },
};

const BASE_URL = "https://toppicksbase.com";

// ---- Featured generators (12) ----
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

// ---- Popular Categories ----
const popularCategories = [
  { label: "Kingdom Names", icon: "🏰", slug: "dark-elf-kingdom-name-generator" },
  { label: "Guild Names", icon: "🛡️", slug: "ancient-dwarf-guild-name-generator" },
  { label: "Dragon Names", icon: "🐉", slug: "fire-dragon-empire-name-generator" },
  { label: "Empire Names", icon: "👑", slug: "fire-dragon-empire-name-generator" },
  { label: "Demon Names", icon: "👹", slug: "infernal-demon-legion-name-generator" },
  { label: "Angel Names", icon: "😇", slug: "holy-angel-realm-name-generator" },
  { label: "Wizard Names", icon: "🧙", slug: "arcane-elf-order-name-generator" },
  { label: "Vampire Names", icon: "🧛", slug: "shadow-vampire-clan-name-generator" },
  { label: "Elf Names", icon: "🏹", slug: "dark-elf-kingdom-name-generator" },
  { label: "Orc Names", icon: "👺", slug: "storm-orc-tribe-name-generator" },
  { label: "Clan Names", icon: "⚔️", slug: "shadow-vampire-clan-name-generator" },
  { label: "Character Names", icon: "🧑", slug: "male-character-name-generator" },
  { label: "City Names", icon: "🏙️", slug: "medieval-city-names" },
  { label: "Dungeon Names", icon: "🏚️", slug: "dark-dungeon-names" },
  { label: "NPC Names", icon: "🎭", slug: "fantasy-npc-names" },
  { label: "Monster Names", icon: "👾", slug: "fantasy-monster-names" },
  { label: "Creature Names", icon: "🐉", slug: "fantasy-creature-names" },
  { label: "Ship Names", icon: "🚢", slug: "pirate-ship-names" },
  { label: "Undead Names", icon: "💀", slug: "void-undead-nation-name-generator" },
  { label: "Phoenix Names", icon: "🐦‍🔥", slug: "crystal-phoenix-dynasty-name-generator" },
  { label: "Dwarf Names", icon: "⛏️", slug: "ancient-dwarf-guild-name-generator" },
  { label: "Ice Names", icon: "❄️", slug: "ice-dwarf-kingdom-name-generator" },
  { label: "Storm Names", icon: "⚡", slug: "storm-orc-tribe-name-generator" },
  { label: "Fire Names", icon: "🔥", slug: "fire-dragon-empire-name-generator" },
  { label: "Holy Names", icon: "✨", slug: "holy-angel-realm-name-generator" },
  { label: "Arcane Names", icon: "🔮", slug: "arcane-elf-order-name-generator" },
  { label: "Shadow Names", icon: "🌑", slug: "shadow-vampire-clan-name-generator" },
];

// ---- Trending Searches (50) ----
const trendingSearches = [
  { label: "Dark Kingdom Names", slug: "dark-elf-kingdom-name-generator" },
  { label: "Demon Empire Names", slug: "infernal-demon-legion-name-generator" },
  { label: "Fantasy Guild Names", slug: "ancient-dwarf-guild-name-generator" },
  { label: "Dragon Kingdom Names", slug: "fire-dragon-empire-name-generator" },
  { label: "Elf Clan Names", slug: "dark-elf-kingdom-name-generator" },
  { label: "Angel Realm Names", slug: "holy-angel-realm-name-generator" },
  { label: "Orc Tribe Names", slug: "storm-orc-tribe-name-generator" },
  { label: "Vampire Clan Names", slug: "shadow-vampire-clan-name-generator" },
  { label: "Undead Dominion Names", slug: "void-undead-nation-name-generator" },
  { label: "Dwarf Guild Names", slug: "ancient-dwarf-guild-name-generator" },
  { label: "Phoenix Dynasty Names", slug: "crystal-phoenix-dynasty-name-generator" },
  { label: "Arcane Order Names", slug: "arcane-elf-order-name-generator" },
  { label: "Celestial Alliance Names", slug: "celestial-angel-alliance-name-generator" },
  { label: "Fire Dragon Empire", slug: "fire-dragon-empire-name-generator" },
  { label: "Ice Kingdom Names", slug: "ice-dwarf-kingdom-name-generator" },
  { label: "Shadow Clan Names", slug: "shadow-vampire-clan-name-generator" },
  { label: "Holy Realm Names", slug: "holy-angel-realm-name-generator" },
  { label: "Infernal Legion Names", slug: "infernal-demon-legion-name-generator" },
  { label: "Ancient Dwarf Guild", slug: "ancient-dwarf-guild-name-generator" },
  { label: "Crystal Phoenix Names", slug: "crystal-phoenix-dynasty-name-generator" },
  { label: "Mystic Elf Kingdom", slug: "dark-elf-kingdom-name-generator" },
  { label: "Blood Vampire Clan", slug: "shadow-vampire-clan-name-generator" },
  { label: "Storm Orc Tribe", slug: "storm-orc-tribe-name-generator" },
  { label: "Golden Dragon Names", slug: "golden-dragon-dominion-name-generator" },
  { label: "Eternal Angel Realm", slug: "celestial-angel-alliance-name-generator" },
  { label: "Dark Elf Names Generator", slug: "dark-elf-kingdom-name-generator" },
  { label: "Dragon Name Ideas", slug: "fire-dragon-empire-name-generator" },
  { label: "Fantasy Kingdom Generator", slug: "dark-elf-kingdom-name-generator" },
  { label: "RPG Clan Names", slug: "shadow-vampire-clan-name-generator" },
  { label: "MMORPG Guild Names", slug: "ancient-dwarf-guild-name-generator" },
  { label: "D&D Kingdom Names", slug: "dark-elf-kingdom-name-generator" },
  { label: "Worldbuilding Name Gen", slug: "fire-dragon-empire-name-generator" },
  { label: "Medieval Kingdom Names", slug: "dark-elf-kingdom-name-generator" },
  { label: "Dark Fantasy Names", slug: "shadow-vampire-clan-name-generator" },
  { label: "Epic Empire Names", slug: "fire-dragon-empire-name-generator" },
  { label: "Minecraft Faction Names", slug: "minecraft-name-generator" },
  { label: "Roblox Group Names", slug: "roblox-name-generator" },
  { label: "Fortnite Clan Names", slug: "fortnite-name-generator" },
  { label: "Valorant Team Names", slug: "valorant-name-generator" },
  { label: "RPG Character Names", slug: "rpg-name-generator" },
  { label: "Fantasy World Names", slug: "world-name-generator" },
  { label: "Continent Name Ideas", slug: "continent-name-generator" },
  { label: "Realm Name Generator", slug: "realm-name-generator" },
  { label: "Faction Name Ideas", slug: "faction-name-generator" },
  { label: "Fantasy City Names", slug: "fantasy-name-generator" },
  { label: "Legendary Kingdom Names", slug: "dark-elf-kingdom-name-generator" },
  { label: "Mythical Empire Names", slug: "fire-dragon-empire-name-generator" },
  { label: "Gothic Vampire Names", slug: "shadow-vampire-clan-name-generator" },
  { label: "Norse Dwarf Names", slug: "ancient-dwarf-guild-name-generator" },
  { label: "Demonic Legion Names", slug: "infernal-demon-legion-name-generator" },
  { label: "Character Name Generator", slug: "character-name-generator" },
  { label: "Fantasy Character Names", slug: "fantasy-character-name-generator" },
  { label: "Anime Character Names", slug: "anime-character-name-generator" },
  { label: "DnD Character Names", slug: "dnd-character-name-generator" },
  { label: "RPG Character Names", slug: "rpg-character-name-generator" },
  { label: "Female Character Names", slug: "female-character-name-generator" },
  { label: "Male Character Names", slug: "male-character-name-generator" },
  { label: "Elf Character Names", slug: "elf-character-name-generator" },
  { label: "Badass Character Names", slug: "badass-character-name-generator" },
  { label: "Wizard Character Names", slug: "wizard-character-name-generator" },
  { label: "Vampire Character Names", slug: "vampire-character-name-generator" },
  { label: "Warrior Character Names", slug: "warrior-character-name-generator" },
  { label: "City Name Generator", slug: "fantasy-city-names" },
  { label: "Fantasy City Names", slug: "fantasy-city-names" },
  { label: "Medieval City Names", slug: "medieval-city-names" },
  { label: "Elven City Names", slug: "elven-city-names" },
  { label: "Dwarven City Names", slug: "dwarven-city-names" },
  { label: "Dark Fantasy City Names", slug: "dark-fantasy-city-names" },
  { label: "Floating City Names", slug: "floating-city-names" },
  { label: "D&D City Names", slug: "dnd-city-names" },
  { label: "Skyrim City Names", slug: "skyrim-city-names" },
  { label: "Steampunk City Names", slug: "steampunk-city-names" },
  { label: "Dungeon Name Generator", slug: "dungeon-names" },
  { label: "D&D Dungeon Names", slug: "dnd-dungeon-names" },
  { label: "Dark Dungeon Names", slug: "dark-dungeon-names" },
  { label: "Cursed Dungeon Names", slug: "cursed-dungeon-names" },
  { label: "Dragon Dungeon Names", slug: "dragon-dungeon-names" },
  { label: "NPC Name Generator", slug: "npc-names" },
  { label: "D&D NPC Names", slug: "dnd-npc-names" },
  { label: "Fantasy NPC Names", slug: "fantasy-npc-names" },
  { label: "Elf NPC Names", slug: "elf-npc-names" },
  { label: "Merchant NPC Names", slug: "merchant-npc-names" },
  { label: "Monster Name Generator", slug: "monster-names" },
  { label: "Fantasy Monster Names", slug: "fantasy-monster-names" },
  { label: "D&D Monster Names", slug: "dnd-monster-names" },
  { label: "Dragon Monster Names", slug: "dragon-monster-names" },
  { label: "Undead Monster Names", slug: "undead-monster-names" },
  { label: "Creature Name Generator", slug: "creature-names" },
  { label: "Fantasy Creature Names", slug: "fantasy-creature-names" },
  { label: "Mythical Creature Names", slug: "mythical-creature-names" },
  { label: "Dragon Creature Names", slug: "dragon-creature-names" },
  { label: "D&D Creature Names", slug: "dnd-creature-names" },
  { label: "Ship Name Generator", slug: "ship-names" },
  { label: "Pirate Ship Names", slug: "pirate-ship-names" },
  { label: "Fantasy Ship Names", slug: "fantasy-ship-names" },
  { label: "Viking Ship Names", slug: "viking-ship-names" },
  { label: "Ghost Ship Names", slug: "ghost-ship-names" },
];

// ---- People Also Search (20) ----
const peopleAlsoSearch = [
  "fantasy name generator",
  "kingdom name generator",
  "dragon name generator",
  "elf name generator",
  "dwarf name generator",
  "demon name generator",
  "angel name generator",
  "orc name generator",
  "vampire name generator",
  "guild name generator",
  "clan name generator",
  "empire name generator",
  "realm name generator",
  "dynasty name generator",
  "fantasy world name generator",
  "D&D name generator",
  "RPG name generator",
  "MMORPG name generator",
  "worldbuilding name generator",
  "fantasy faction name generator",
];

// ---- Fantasy World Showcase ----
const showcaseWorlds = [
  { title: "Eldergloom Reach", desc: "A twilight realm where dark elf kingdoms thrive beneath eternal starlight, their obsidian spires piercing the violet sky.", tags: ["Dark", "Elf", "Kingdom"], color: "from-purple-950 via-violet-950 to-black" },
  { title: "Ironforge Citadel", desc: "Ancient dwarf guild-halls carved into living mountains, where master smiths forge weapons of legendary power.", tags: ["Ancient", "Dwarf", "Guild"], color: "from-orange-950 via-amber-950 to-black" },
  { title: "Celestial Spire", desc: "A floating angel alliance city of crystal and light, suspended above the clouds by divine energy.", tags: ["Celestial", "Angel", "Alliance"], color: "from-blue-950 via-cyan-950 to-black" },
  { title: "Shadowmere Depths", desc: "Beneath cursed earth, undead dominions plot their eternal return, their crypt-cities humming with dark magic.", tags: ["Void", "Undead", "Dominion"], color: "from-gray-950 via-slate-950 to-black" },
];

// ---- Stats ----
const stats = [
  { value: "4,500+", label: "Generators", color: "from-purple-600 to-indigo-600" },
  { value: "20", label: "Themes", color: "from-blue-600 to-cyan-600" },
  { value: "15", label: "Races", color: "from-emerald-600 to-teal-600" },
  { value: "450K+", label: "Unique Names", color: "from-orange-600 to-rose-600" },
];

// ---- Internal link groups ----
const internalLinkGroups = [
  {
    title: "Kingdom Generators",
    links: pages.filter(p => p.context === "Kingdom").slice(0, 6).map(p => ({ slug: p.slug, title: p.title })),
  },
  {
    title: "Empire Generators",
    links: pages.filter(p => p.context === "Empire").slice(0, 6).map(p => ({ slug: p.slug, title: p.title })),
  },
  {
    title: "Dragon Generators",
    links: pages.filter(p => p.race === "Dragon").slice(0, 6).map(p => ({ slug: p.slug, title: p.title })),
  },
  {
    title: "Demon Generators",
    links: pages.filter(p => p.race === "Demon").slice(0, 6).map(p => ({ slug: p.slug, title: p.title })),
  },
];

// ---- ItemList schema ----
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": featuredPages.slice(0, 12).map((page, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": page.title,
    "url": `${BASE_URL}/${page.slug}`,
    "description": `Generate unique ${page.theme} ${page.race} ${page.context} names with meanings and lore.`,
  })),
};

export default function HomePage() {
  return (
    <article>
      {/* ========================================
          1. Hero
          ======================================== */}
      <section className="mb-12">
        <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
          Game Name Generator Hub
        </h1>
        <p className="mb-2 text-xl text-gray-300">
          4,500+ Free Fantasy Name Generators
        </p>
        <p className="mb-6 text-gray-400">
          The largest collection of fantasy name generators on the web. Kingdoms, empires,
          clans, guilds — 20 themes × 15 races × 15 contexts.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/search"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-purple-900/30"
          >
            Explore All Generators →
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:border-gray-500 hover:bg-gray-800"
          >
            Read Naming Guides →
          </Link>
        </div>
      </section>

      {/* ========================================
          2. Stats
          ======================================== */}
      <section className="mb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/50"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
              <div className="relative z-10">
                <div className="mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-extrabold text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          3. Generator Explorer
          ======================================== */}
      <GeneratorExplorer />

      {/* ========================================
          4. Ad Placeholder 1
          ======================================== */}
      <AdPlaceholder label="Advertisement" />

      {/* ========================================
          5. Popular Categories
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">Popular Categories</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Browse our most popular name generator categories. Each category contains hundreds
          of unique generators with names, meanings, guides, and FAQs.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {popularCategories.map((cat) => (
            <Link
              key={cat.label}
              href={`/${cat.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/50 p-3.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-purple-500/40 hover:bg-gray-800 hover:text-white hover:shadow-md hover:shadow-purple-900/10 hover:-translate-y-0.5"
            >
              <span className="text-xl transition-transform duration-200 group-hover:scale-110">
                {cat.icon}
              </span>
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================
          6. Trending Searches
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">Trending Searches</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          See what fantasy worldbuilders are searching for. Jump into the most popular name
          generation trends across our community.
        </p>
        <div className="flex flex-wrap gap-2">
          {trendingSearches.map((item) => (
            <Link
              key={item.label}
              href={`/${item.slug}`}
              className="inline-flex items-center rounded-full border border-gray-700 bg-gray-900/40 px-3.5 py-1.5 text-xs text-gray-400 transition-all duration-200 hover:border-purple-500/60 hover:bg-gray-800 hover:text-white hover:shadow-sm hover:shadow-purple-900/20"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================
          7. Featured Generators
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">Featured Generators</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Our most popular name generators. Each includes 100 name examples with meanings,
          20 featured names with detailed lore, a comprehensive naming guide, and FAQs.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPages.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/0 via-indigo-900/0 to-purple-900/0 opacity-0 transition-opacity duration-500 group-hover:from-purple-900/15 group-hover:via-indigo-900/8 group-hover:to-purple-900/15 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-2 inline-flex items-center gap-1 rounded-full border border-gray-700 px-2.5 py-0.5 text-xs text-gray-400">
                  {page.theme} · {page.race} · {page.context}
                </div>
                <h3 className="mb-3 text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                  {page.title}
                </h3>
                <div className="mb-4 space-y-1.5">
                  {["100 Names", "20 Meanings", "Guide Included", "FAQ Included"].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="text-green-500">✓</span>
                      {feat}
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                  Generate →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================
          8. Ad Placeholder 2
          ======================================== */}
      <AdPlaceholder label="Advertisement" />

      {/* ========================================
          9. Fantasy World Showcase
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">Fantasy World Showcase</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Explore our curated fantasy world concepts. Each world comes with a complete naming
          system, cultural backdrop, and thematic identity.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {showcaseWorlds.map((world) => (
            <div
              key={world.title}
              className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b ${world.color} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/50`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-70" />
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="mb-2 text-xl font-bold text-white">{world.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-300">
                  {world.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {world.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-600/50 bg-gray-800/50 px-2.5 py-0.5 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          10. Latest Articles
          ======================================== */}
      <HomeBlogPreview />

      {/* ========================================
          11. Ad Placeholder 3
          ======================================== */}
      <AdPlaceholder label="Advertisement" />

      {/* ========================================
          12. Internal Linking
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">Related Generators</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Discover more fantasy name generators. Our internal linking system connects 4,500+
          pages across themes, races, and organization types — you are always just one click
          away from your next creative discovery.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {internalLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                {group.title}
              </h3>
              <div className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <Link
                    key={link.slug}
                    href={`/${link.slug}`}
                    className="text-sm text-gray-400 transition hover:text-white hover:underline"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          13. People Also Search
          ======================================== */}
      <section className="mb-16 rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
        <h2 className="mb-4 text-3xl font-bold">People Also Search</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Discover related search terms and alternative generator categories that other
          worldbuilders are exploring.
        </p>
        <div className="flex flex-wrap gap-2">
          {peopleAlsoSearch.map((term) => (
            <Link
              key={term}
              href={`/search?q=${encodeURIComponent(term)}`}
              className="rounded-lg border border-gray-700 bg-gray-800/50 px-3.5 py-2 text-sm text-gray-400 transition-all duration-200 hover:border-gray-500 hover:bg-gray-800 hover:text-white"
            >
              {term}
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================
          14. Content (Long-form)
          ======================================== */}
      <section className="mb-16 space-y-10">
        {/* What Is */}
        <div>
          <h2 className="mb-4 text-3xl font-bold">What Is Game Name Generator Hub?</h2>
          <div className="space-y-4 leading-relaxed text-gray-400">
            <p>
              <strong className="text-white">Game Name Generator Hub</strong> is the internet&apos;s largest and most
              comprehensive fantasy name generator platform. We offer over 4,500 unique name generators, each
              one a complete resource page designed for worldbuilders, RPG dungeon masters, fantasy authors,
              game developers, and creative writers. Unlike simple random name generators that output a bare
              list and call it a day, every single one of our generators is a deep, content-rich resource
              that includes 100 unique name examples with individual meanings, 20 featured names with
              paragraph-length lore and backstory, a detailed naming guide explaining the linguistic and
              cultural patterns behind the names, an introduction article with historical and fictional
              context, and a dedicated FAQ section answering common questions about naming conventions.
            </p>
            <p>
              Our generator system is built on a matrix of <strong className="text-white">20 magical themes</strong>
              — including Dark, Shadow, Arcane, Celestial, Infernal, Mystic, Royal, Ancient, Blood, Crystal,
              Eternal, Fire, Frozen, Golden, Holy, Ice, Savage, Storm, and Void — combined with{" "}
              <strong className="text-white">15 fantasy races</strong> such as Elves, Dragons, Dwarves, Orcs,
              Vampires, Angels, Demons, Phoenixes, Titans, Undead, Giants, Goblins, Humans, Naga, and
              Werewolves, across <strong className="text-white">15 distinct organization types</strong>: Kingdoms,
              Empires, Clans, Guilds, Legions, Realms, Factions, Teams, Squads, Nations, Dynasties, Orders,
              Tribes, Alliances, and Dominions. This systematic approach means every possible combination is
              covered — from Void Undead Nations to Crystal Phoenix Dynasties to Infernal Demon Legions —
              ensuring you always find the exact flavor of fantasy name you&apos;re looking for.
            </p>
            <p>
              Across our entire platform, this translates to access to over{" "}
              <strong className="text-white">450,000 unique fantasy names</strong>, each one ready to inspire
              your next creative project, D&D campaign, fantasy novel, or video game world. And with over
              90,000 internal links connecting all pages, our generators form a rich, interlinked knowledge
              base that makes discovery easy and natural. Whether you need a single name for a side quest
              NPC guild or an entire pantheon of names for a sprawling epic fantasy series, our platform
              provides the depth and variety to support projects of any scale.
            </p>
            <p>
              What sets us apart from other name generators is our commitment to{" "}
              <strong className="text-white">quality over quantity</strong> — but we deliver both. While many
              tools simply concatenate random syllables, our names are built from carefully curated word pools
              that respect linguistic patterns, cultural conventions, and genre expectations. The result is
              names that don&apos;t just sound cool — they feel like they belong in a real fantasy world with
              history, culture, and depth.
            </p>
          </div>
        </div>

        {/* Why Use */}
        <div>
          <h2 className="mb-4 text-3xl font-bold">Why Use Our Name Generators?</h2>
          <div className="space-y-4 leading-relaxed text-gray-400">
            <p>
              Naming is one of the hardest and most time-consuming parts of worldbuilding. A great name sets
              the tone for an entire civilization, communicates the essence of a culture, and makes your world
              feel authentic and lived-in. But coming up with dozens — or hundreds — of unique, meaningful
              names that all fit a consistent theme can be exhausting for even the most experienced creators.
              Writer&apos;s block hits hardest when you&apos;re staring at a blank page, trying to invent names that
              will define an entire fictional universe.
            </p>
            <p>
              Our generators take the guesswork out of naming by combining consistent thematic elements with
              deep cultural context. Each name is generated using carefully crafted word pools, theme-specific
              prefixes, and context-appropriate suffixes. The results feel authentic because they follow the
              same linguistic patterns that real-world cultures use to name their kingdoms, cities, and
              organizations. You get names that sound like they belong together — names that could appear in
              a published fantasy novel, a professional video game, or a beloved tabletop RPG sourcebook.
            </p>
            <p>
              Beyond just generating individual names, our platform helps you build{" "}
              <strong className="text-white">cohesive naming systems</strong>. Each generator page includes
              related generators organized by theme, race, and context, so you can easily find names that
              complement each other within your world. Need names for five different elf kingdoms in the same
              region? Use generators from the same theme but different contexts, and you&apos;ll get names that
              feel like they share a common cultural heritage while retaining their unique identities.
            </p>
            <p>
              Best of all, everything on Game Name Generator Hub is{" "}
              <strong className="text-white">completely free</strong>. No sign-ups, no subscriptions, no hidden
              fees, no premium tiers. We believe creativity tools should be accessible to everyone, whether
              you&apos;re a professional game designer working on a AAA title, a self-published fantasy author
              crafting your debut novel, or a first-time dungeon master preparing your very first D&D
              campaign. All names are free for both personal and commercial use, with no attribution required.
            </p>
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <h2 className="mb-4 text-3xl font-bold">Best Practices for Fantasy Naming</h2>
          <div className="space-y-4 leading-relaxed text-gray-400">
            <p>
              Getting the best results from a name generator is as much about how you use the names as it is
              about which names you get. Professional worldbuilders and game designers follow established
              naming conventions to create worlds that feel cohesive and believable. Here are our top best
              practices for getting the most out of our fantasy name generators:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Mix and match generators strategically.</strong> Use one generator for your empire name, another for its constituent kingdoms, and a third for the guilds and factions within those kingdoms. Consistent thematic and racial elements across multiple generators create a cohesive world with natural internal logic.</li>
              <li><strong className="text-white">Read and use the meanings.</strong> Every name on our platform comes with a unique meaning. These meanings often suggest interesting cultural details, historical events, or geographical features you can weave into your worldbuilding. A kingdom named &quot;Stormwatch&quot; with a meaning about ancient sentinels guarding against sea invasions immediately gives you plot hooks.</li>
              <li><strong className="text-white">Study the featured name lore.</strong> Our 20 featured names per generator include full paragraphs of backstory covering origin myths, founding legends, and cultural traditions. Even if you don&apos;t use the exact name, the lore serves as a creative jumping-off point for developing your own world&apos;s history.</li>
              <li><strong className="text-white">Maintain regional consistency.</strong> If you&apos;re building a continent with multiple nations, assign specific themes and races to each geographic region. The northern tundras might use Ice and Frost themes with Dwarf and Giant races, while the southern jungles use Savage and Mystic themes with Elf and Naga races.</li>
              <li><strong className="text-white">Experiment with unexpected combinations.</strong> While Dark + Dragon is a classic pairing, try unexpected combinations like Crystal + Orc or Holy + Vampire. These unusual pairings can produce remarkably creative and memorable results that set your world apart from generic fantasy settings.</li>
            </ul>
          </div>
        </div>

        {/* Tips */}
        <div>
          <h2 className="mb-4 text-3xl font-bold">Tips for Worldbuilders and RPG Creators</h2>
          <div className="space-y-4 leading-relaxed text-gray-400">
            <p>
              Whether you&apos;re building a world for a novel, a tabletop RPG campaign, a video game, or a
              homebrew D&D setting, a consistent and well-thought-out naming system is one of the most
              powerful tools at your disposal. Names are often the first thing your players, readers, or
              users encounter, and they set expectations for everything that follows.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Create a naming bible for your project.</strong> Document which themes, races, and contexts apply to which regions, factions, and historical periods in your world. This reference document ensures consistency as your project grows and prevents accidental contradictions.</li>
              <li><strong className="text-white">Use a hierarchical approach.</strong> Start at the top: generate your empire or world-spanning faction name first. Then use generators from the same theme and race for constituent kingdoms, then for cities and strongholds, then for guilds and local organizations. This top-down approach creates a natural hierarchy where names at each level feel appropriately scaled.</li>
              <li><strong className="text-white">Leverage the 20 featured names as ready-made content.</strong> Each featured name comes with detailed lore that can serve as a ready-made faction, NPC organization, quest-giving institution, or antagonist group. For a D&D campaign, this means 20 potential plot hooks per generator page.</li>
              <li><strong className="text-white">Bookmark your favorite generator URLs.</strong> Since our generators use deterministic seeded generation, bookmarking a URL guarantees you&apos;ll always see the exact same names. Share these URLs with your co-writers, players, or collaborators for consistent reference.</li>
              <li><strong className="text-white">Explore beyond your comfort zone.</strong> If you typically create heroic high fantasy, try browsing our Dark, Void, or Infernal themed generators. You might discover fascinating new aesthetic directions that add depth and contrast to your world.</li>
              <li><strong className="text-white">Use the internal linking system for discovery.</strong> Our 90,000+ internal links mean every generator page connects to dozens of related pages. Following these links is one of the best ways to discover unexpected and inspiring name combinations.</li>
            </ul>
          </div>
        </div>

        {/* Common Mistakes */}
        <div>
          <h2 className="mb-4 text-3xl font-bold">Common Naming Mistakes to Avoid</h2>
          <div className="space-y-4 leading-relaxed text-gray-400">
            <p>
              Even experienced worldbuilders and published fantasy authors sometimes fall into these common
              naming traps. Being aware of them will help you create more authentic, memorable, and
              professional-sounding fantasy names for your projects:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Overcomplicating names.</strong> A name like &quot;The Grand Imperial Dynasty of the Eternal Dragon Throne of the Seventh Celestial Sphere&quot; might sound impressive at first glance, but it&apos;s nearly impossible for readers or players to remember and awkward to use in dialogue. Shorter, punchier names are almost always more effective and memorable.</li>
              <li><strong className="text-white">Inconsistent linguistic patterns.</strong> If all your elf kingdoms use flowing, vowel-rich names like &quot;Aelindor&quot; and &quot;Quenlassë,&quot; don&apos;t suddenly introduce a harsh, consonant-heavy elf name like &quot;Grakthar&quot; without a compelling narrative explanation for the linguistic divergence.</li>
              <li><strong className="text-white">Using real-world names with cosmetic changes.</strong> Replacing &quot;New&quot; with &quot;Shadow&quot; to get &quot;Shadow York&quot; still sounds derivative. Our generators avoid this problem by drawing from dedicated fantasy word pools that have no real-world analogues.</li>
              <li><strong className="text-white">Ignoring the implications of meanings.</strong> A kingdom named &quot;The Crimson Blade&quot; implies a militaristic, perhaps violent culture. If your narrative portrays this kingdom as peaceful and diplomatic, the name creates cognitive dissonance for your audience.</li>
              <li><strong className="text-white">Naming everything at once.</strong> Resist the urge to name every kingdom, city, guild, and NPC before you start writing or playing. Leave room for inspiration. Sometimes the best names emerge organically as your world develops.</li>
            </ul>
          </div>
        </div>

        {/* Examples */}
        <div>
          <h2 className="mb-4 text-3xl font-bold">Name Generation Examples</h2>
          <div className="space-y-4 leading-relaxed text-gray-400">
            <p>
              To give you a concrete sense of what our generators produce, here are detailed examples of
              the kind of results you can expect from several popular generator categories. Each example
              represents a real output from our platform:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
                <h3 className="mb-2 font-semibold text-white">Dark Elf Kingdom Names</h3>
                <p className="text-sm">Generates names like Shadowmere, Nightthorn Keep, Duskveil Court, and Gloomhollow — each accompanied by meanings such as &quot;Where dark elf lords weave shadows into political power&quot; and full lore paragraphs describing founding myths, dynastic histories, and cultural traditions of subterranean elf societies.</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
                <h3 className="mb-2 font-semibold text-white">Fire Dragon Empire Names</h3>
                <p className="text-sm">Produces names like Emberforge Dominion, Flamepeak Sovereignty, Ashcrown Imperium, and Cinderheart Throne — complete with dragon-specific lore about ancient wyrms, volcanic strongholds, hoard traditions, and the complex politics of draconic hierarchies.</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
                <h3 className="mb-2 font-semibold text-white">Holy Angel Realm Names</h3>
                <p className="text-sm">Creates names like Celestial Haven, Radiant Spire, Dawnlight Sanctuary, and Seraph&apos;s Vigil — with divine lore exploring celestial hierarchies, sacred duties, the nature of heavenly realms, and the relationships between angelic orders and mortal kingdoms.</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
                <h3 className="mb-2 font-semibold text-white">Infernal Demon Legion Names</h3>
                <p className="text-sm">Delivers names like Brimstone Horde, Hellfire Cohort, Abyssal Warband, and Netherforge Phalanx — with dark lore covering infernal politics, demonic hierarchies, the endless wars of the abyss, and the complex codes of honor that govern demon societies.</p>
              </div>
            </div>
            <p>
              These are just four examples from our library of 4,500 generators. Every single generator
              follows the same comprehensive format: 100 names with meanings, 20 featured names with lore,
              a naming guide, an introduction article, and a dedicated FAQ. Whether you need a single name
              or a complete naming system for an entire fictional world, our platform has you covered.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          How to Use Our Generators
          ======================================== */}
      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">How to Use Our Name Generators</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            Using our name generators is straightforward. Every generator page follows the same
            consistent structure, so once you learn the layout, you can navigate any of our 4,500
            pages effortlessly. Each generator is organized into clear sections: an introduction that
            provides historical and cultural context for the theme-race-context combination, a naming
            guide that explains the linguistic patterns and conventions used to construct the names,
            a grid of 100 name examples each with its own unique meaning, a curated selection of 20
            featured names with full paragraph-length lore, and a FAQ section addressing common
            questions about that specific generator category.
          </p>
          <p>
            You can access any generator directly by browsing our homepage categories, using the
            search function at the top of every page, or following the extensive internal link
            network that connects related generators by theme, race, and context. Every generator
            page also includes links to related articles from our blog, providing deeper dives into
            naming techniques, worldbuilding strategies, and genre-specific conventions. Whether you
            arrive via search, a direct link, or internal navigation, you will find a complete,
            self-contained naming resource ready to use immediately.
          </p>
        </div>
      </section>

      {/* ========================================
          15. FAQ
          ======================================== */}
      <HomeFAQ />

      {/* ========================================
          16. Ad Placeholder 4
          ======================================== */}
      <AdPlaceholder label="Advertisement" />

      {/* ========================================
          17. CTA
          ======================================== */}
      <section className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-900/50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to Start Generating?</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          Browse our 4,500+ fantasy name generators and find the perfect name
          for your kingdom, empire, clan, guild, or any fantasy organization.
          All free, no sign-up required.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/dark-elf-kingdom-name-generator"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-purple-900/30"
          >
            Try Dark Elf Kingdom →
          </Link>
          <Link
            href="/fire-dragon-empire-name-generator"
            className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:border-gray-500 hover:bg-gray-800"
          >
            Try Fire Dragon Empire →
          </Link>
          <Link
            href="/search"
            className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:border-gray-500 hover:bg-gray-800"
          >
            Search All Generators →
          </Link>
        </div>
      </section>

      {/* ========================================
          18. JSON-LD Schema
          ======================================== */}
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={webPageSchema(
        "Game Name Generator Hub — 4,500+ Fantasy Name Generators",
        "Generate unique fantasy names for kingdoms, empires, clans, guilds and more. 20 themes, 15 races, 15 contexts — 4,500+ free name generators with meanings and lore.",
        BASE_URL
      )} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: BASE_URL }])} />
      <JsonLd data={itemListSchema} />
    </article>
  );
}

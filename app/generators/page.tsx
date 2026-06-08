import type { Metadata } from "next";
import Link from "next/link";
import pages from "@/data/pages.json";
import { JsonLd } from "@/components/json-ld";
import AdPlaceholder from "@/components/ad-placeholder";

const BASE_URL = "https://toppicksbase.com";

export const metadata: Metadata = {
  title: "All Fantasy Name Generators — Browse 5,200+ Free Generators",
  description:
    "Browse our complete collection of 5,200+ free fantasy name generators. Kingdom, clan, guild, dragon, demon, angel names and more. Search and filter by category.",
  keywords:
    "fantasy name generators, all name generators, kingdom names, clan names, guild names, dragon names, demon names, angel names, free name generator",
  alternates: { canonical: `${BASE_URL}/generators` },
  openGraph: {
    title: "All Fantasy Name Generators — Browse 5,200+ Free Generators",
    description:
      "Browse our complete collection of 5,200+ free fantasy name generators.",
    type: "website",
  },
  twitter: {
    title: "All Fantasy Name Generators",
    description:
      "Browse our complete collection of 5,200+ free fantasy name generators.",
  },
};

const categoryHubs = [
  { label: "Kingdom Names", icon: "🏰", slug: "kingdom-names", desc: "Royal kingdoms, dark empires, medieval realms" },
  { label: "Clan Names", icon: "⚔️", slug: "clan-names", desc: "Warrior clans, gaming clans, tribal factions" },
  { label: "Guild Names", icon: "🛡️", slug: "guild-names", desc: "MMORPG guilds, trade guilds, adventure guilds" },
  { label: "Dragon Names", icon: "🐉", slug: "dragon-names", desc: "Dragon empires, draconic clans, wyrm kingdoms" },
  { label: "Demon Names", icon: "👹", slug: "demon-names", desc: "Infernal legions, demon empires, hellish realms" },
  { label: "Angel Names", icon: "😇", slug: "angel-names", desc: "Celestial realms, divine orders, holy alliances" },
  { label: "Vampire Names", icon: "🧛", slug: "vampire-names", desc: "Vampire clans, gothic courts, blood dynasties" },
  { label: "Orc Names", icon: "👺", slug: "orc-names", desc: "Orc tribes, war hordes, savage clans" },
  { label: "Elf Names", icon: "🏹", slug: "elf-names", desc: "Elven kingdoms, high elf realms, dark elf courts" },
];

const popularGenerators = [
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

export default function GeneratorsPage() {
  const featured = popularGenerators
    .map((slug) => pages.find((p) => p.slug === slug))
    .filter(Boolean) as typeof pages;

  return (
    <article>
      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-300">All Generators</li>
        </ol>
      </nav>

      {/* Hero */}
      <h1 className="mb-4 text-4xl font-extrabold">
        All Fantasy Name Generators
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-gray-300">
        Browse our complete collection of 5,200+ free fantasy name generators.
        From dark elf kingdoms to celestial angel realms — find the perfect name
        generator for your worldbuilding, RPG campaign, or creative project.
      </p>

      {/* Search */}
      <section className="mb-12">
        <form action="/search" method="GET" className="flex gap-3">
          <input
            type="text"
            name="q"
            placeholder="Search all generators... e.g. Dark Elf Kingdom"
            className="flex-1 rounded-xl border border-gray-700 bg-gray-800 px-5 py-3 text-white placeholder-gray-500 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-purple-900/30"
          >
            Search
          </button>
        </form>
      </section>

      <AdPlaceholder label="Advertisement" />

      {/* Category Hubs */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Browse by Category</h2>
        <p className="mb-6 text-gray-500">
          Explore our curated category hubs — each containing hundreds of
          specialized name generators with meanings, lore, and naming guides.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryHubs.map((hub) => (
            <Link
              key={hub.slug}
              href={`/${hub.slug}`}
              className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-900/10"
            >
              <span className="mb-3 block text-3xl">{hub.icon}</span>
              <h3 className="mb-1 text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                {hub.label}
              </h3>
              <p className="text-sm text-gray-400">{hub.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                Browse {hub.label} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Generators */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Popular Generators</h2>
        <p className="mb-6 text-gray-500">
          Our most-used name generators — trusted by worldbuilders, RPG players,
          and fantasy writers worldwide.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-3.5 text-sm text-gray-300 transition hover:border-purple-500/40 hover:bg-gray-800 hover:text-white"
            >
              <span className="font-medium">{p.title}</span>
              <p className="mt-1 text-xs text-gray-500">
                {p.theme} · {p.race} · {p.context}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <AdPlaceholder label="Advertisement" />

      {/* All Themes */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Generators by Theme</h2>
        <p className="mb-6 text-gray-500">
          Browse name generators organized by magical theme. Each theme produces
          distinct naming styles across all races and organization types.
        </p>
        <div className="flex flex-wrap gap-2">
          {[...new Set(pages.map((p) => p.theme))].sort().map((theme) => (
            <Link
              key={theme}
              href={`/search?q=${encodeURIComponent(theme.toLowerCase())}`}
              className="rounded-lg border border-gray-700 bg-gray-800/40 px-3.5 py-2 text-sm text-gray-400 transition hover:border-gray-500 hover:bg-gray-800 hover:text-white"
            >
              {theme}
            </Link>
          ))}
        </div>
      </section>

      {/* All Races */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Generators by Race</h2>
        <p className="mb-6 text-gray-500">
          Browse name generators organized by fantasy race. Find the perfect
          names for your elf kingdoms, orc tribes, dragon empires, and more.
        </p>
        <div className="flex flex-wrap gap-2">
          {[...new Set(pages.map((p) => p.race))].sort().map((race) => (
            <Link
              key={race}
              href={`/search?q=${encodeURIComponent(race.toLowerCase())}`}
              className="rounded-lg border border-gray-700 bg-gray-800/40 px-3.5 py-2 text-sm text-gray-400 transition hover:border-gray-500 hover:bg-gray-800 hover:text-white"
            >
              {race}
            </Link>
          ))}
        </div>
      </section>

      {/* All Contexts */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Generators by Type</h2>
        <p className="mb-6 text-gray-500">
          Browse name generators organized by organization type — kingdoms,
          empires, clans, guilds, and more.
        </p>
        <div className="flex flex-wrap gap-2">
          {[...new Set(pages.map((p) => p.context))].sort().map((context) => (
            <Link
              key={context}
              href={`/search?q=${encodeURIComponent(context.toLowerCase())}`}
              className="rounded-lg border border-gray-700 bg-gray-800/40 px-3.5 py-2 text-sm text-gray-400 transition hover:border-gray-500 hover:bg-gray-800 hover:text-white"
            >
              {context}
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12 rounded-2xl border border-gray-800 bg-gray-900/30 p-8">
        <h2 className="mb-4 text-2xl font-bold">How Our Generators Work</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1", title: "Choose a Theme", desc: "Pick from 20 magical themes — Dark, Arcane, Celestial, and more" },
            { step: "2", title: "Select a Race", desc: "Choose from 15 fantasy races — Elves, Dragons, Orcs, and more" },
            { step: "3", title: "Pick a Context", desc: "Select the organization type — Kingdom, Empire, Clan, Guild" },
            { step: "4", title: "Get Your Names", desc: "Get 100 names with meanings, 20 with lore, guides, and FAQs" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mb-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50 text-lg font-bold text-purple-300">
                {item.step}
              </div>
              <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schemas */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "All Fantasy Name Generators",
          description:
            "Browse our complete collection of 5,200+ free fantasy name generators.",
          url: `${BASE_URL}/generators`,
          hasPart: categoryHubs.map((hub, i) => ({
            "@type": "WebPage",
            name: hub.label,
            url: `${BASE_URL}/${hub.slug}`,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "All Fantasy Name Generators — Browse 5,200+ Free Generators",
          description:
            "Browse our complete collection of 5,200+ free fantasy name generators.",
          url: `${BASE_URL}/generators`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
            { "@type": "ListItem", "position": 2, "name": "All Generators", "item": `${BASE_URL}/generators` },
          ],
        }}
      />
    </article>
  );
}

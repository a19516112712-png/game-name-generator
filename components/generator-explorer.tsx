"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { label: "Kingdom", icon: "🏰", slug: "dark-elf-kingdom-name-generator" },
  { label: "Guild", icon: "🛡️", slug: "ancient-dwarf-guild-name-generator" },
  { label: "Clan", icon: "⚔️", slug: "shadow-vampire-clan-name-generator" },
  { label: "Dragon", icon: "🐉", slug: "fire-dragon-empire-name-generator" },
  { label: "Demon", icon: "👹", slug: "infernal-demon-legion-name-generator" },
  { label: "Angel", icon: "😇", slug: "holy-angel-realm-name-generator" },
  { label: "Elf", icon: "🏹", slug: "dark-elf-kingdom-name-generator" },
  { label: "Orc", icon: "👺", slug: "storm-orc-tribe-name-generator" },
  { label: "Vampire", icon: "🧛", slug: "shadow-vampire-clan-name-generator" },
  { label: "Empire", icon: "👑", slug: "fire-dragon-empire-name-generator" },
];

export default function GeneratorExplorer() {
  const [query, setQuery] = useState("");

  return (
    <section className="mb-16">
      <h2 className="mb-4 text-3xl font-bold">Generator Explorer</h2>
      <p className="mb-6 leading-relaxed text-gray-400">
        Search across 4,500+ fantasy name generators or browse by category.
      </p>

      {/* Search */}
      <form action="/search" method="GET" className="mb-6 flex gap-3">
        <input
          type="text"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search generators... e.g. Dark Elf Kingdom"
          className="flex-1 rounded-xl border border-gray-700 bg-gray-800 px-5 py-3 text-white placeholder-gray-500 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
        />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-purple-900/30"
        >
          Search
        </button>
      </form>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            href={`/${cat.slug}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-700 bg-gray-800/50 px-3.5 py-2 text-sm text-gray-300 transition-all duration-200 hover:border-purple-500/50 hover:bg-gray-800 hover:text-white hover:shadow-md hover:shadow-purple-900/10"
          >
            <span>{cat.icon}</span>
            {cat.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

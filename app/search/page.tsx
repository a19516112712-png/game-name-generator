import type { Metadata } from "next";
import Link from "next/link";
import pages from "@/data/pages.json";
import intents from "@/data/intent-pages.json";
import posts from "@/data/blog-posts.json";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Search — Game Name Generator Hub",
  description:
    "Search across 4,500+ name generators, intent pages, and blog articles. Find the perfect fantasy name generator for your needs.",
};

type Props = {
  searchParams: Promise<{ q?: string }>;
};

interface SearchResult {
  type: "generator" | "intent" | "blog";
  slug: string;
  title: string;
  description: string;
  url: string;
  category?: string;
  keywords?: string;
}

async function searchAll(query: string): Promise<SearchResult[]> {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  // Search generator pages
  for (const p of pages) {
    const searchText = `${p.title} ${p.slug} ${p.theme} ${p.race} ${p.context}`.toLowerCase();
    if (searchText.includes(q)) {
      results.push({
        type: "generator",
        slug: p.slug,
        title: p.title,
        description: `Generate unique ${p.theme} ${p.race} ${p.context} names with meanings, lore and fantasy inspiration.`,
        url: `/${p.slug}`,
        category: `${p.theme} · ${p.race} · ${p.context}`,
      });
    }
  }

  // Search intent pages
  for (const i of intents) {
    const searchText = `${i.title} ${i.slug} ${i.keywords} ${i.category}`.toLowerCase();
    if (searchText.includes(q)) {
      results.push({
        type: "intent",
        slug: i.slug,
        title: i.title,
        description: i.description,
        url: `/${i.slug}`,
        category: i.category,
      });
    }
  }

  // Search blog posts
  for (const post of posts) {
    const searchText = `${post.title} ${post.slug} ${post.keywords} ${post.category} ${post.description}`.toLowerCase();
    if (searchText.includes(q)) {
      results.push({
        type: "blog",
        slug: post.slug,
        title: post.title,
        description: post.description,
        url: `/blog/${post.slug}`,
        category: post.category,
        keywords: post.keywords,
      });
    }
  }

  // Sort: prioritize exact title matches, then sort by type
  results.sort((a, b) => {
    const aExact = a.title.toLowerCase() === q ? 0 : 1;
    const bExact = b.title.toLowerCase() === q ? 0 : 1;
    if (aExact !== bExact) return aExact - bExact;
    return a.title.localeCompare(b.title);
  });

  return results;
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q || "";
  const results = query ? await searchAll(query) : [];

  const generatorCount = results.filter((r) => r.type === "generator").length;
  const intentCount = results.filter((r) => r.type === "intent").length;
  const blogCount = results.filter((r) => r.type === "blog").length;

  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-4xl font-extrabold">Search</h1>
      <p className="mb-8 text-gray-400">
        Search across 4,500+ name generators, intent pages, and blog articles.
      </p>

      {/* Search Form */}
      <form className="mb-10" action="/search" method="GET">
        <div className="flex gap-3">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder='Try "dragon kingdom", "elf", "minecraft"...'
            className="flex-1 rounded-xl border border-gray-700 bg-gray-900 px-5 py-3 text-white placeholder-gray-500 outline-none transition focus:border-gray-500"
            autoFocus
          />
          <button
            type="submit"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-gray-950 transition hover:bg-gray-200"
          >
            Search
          </button>
        </div>
      </form>

      {/* Results */}
      {query && (
        <div>
          <p className="mb-6 text-gray-400">
            {results.length === 0
              ? `No results found for "${query}".`
              : `Found ${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`}
            {results.length > 0 &&
              ` — ${generatorCount} generators, ${intentCount} intent pages, ${blogCount} blog articles`}
          </p>

          {results.length > 0 && (
            <div className="space-y-4">
              {results.map((result) => (
                <Link
                  key={`${result.type}-${result.slug}`}
                  href={result.url}
                  className="block rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-600 hover:bg-gray-800"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={`rounded px-2 py-0.5 text-xs font-medium ${
                        result.type === "generator"
                          ? "bg-blue-900/50 text-blue-300"
                          : result.type === "intent"
                            ? "bg-green-900/50 text-green-300"
                            : "bg-purple-900/50 text-purple-300"
                      }`}
                    >
                      {result.type === "generator"
                        ? "Generator"
                        : result.type === "intent"
                          ? "Intent Page"
                          : "Blog"}
                    </span>
                    {result.category && (
                      <span className="text-xs text-gray-500">
                        {result.category}
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-white">
                    {result.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">
                    {result.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Empty state */}
      {!query && (
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
          <p className="mb-2 text-lg text-gray-300">
            Search our entire collection
          </p>
          <p className="text-sm text-gray-500">
            Enter a keyword above to find name generators, intent pages, or
            blog articles.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["dragon", "elf", "minecraft", "kingdom", "guild", "demon", "angel", "fantasy"].map(
              (kw) => (
                <Link
                  key={kw}
                  href={`/search?q=${kw}`}
                  className="rounded-lg border border-gray-700 px-3 py-1.5 text-sm text-gray-400 transition hover:border-gray-500 hover:text-white"
                >
                  {kw}
                </Link>
              )
            )}
          </div>
        </div>
      )}

      <JsonLd
        data={webPageSchema(
          "Search — Game Name Generator Hub",
          "Search across 4,500+ name generators, intent pages, and blog articles.",
          "https://game-name-generator-hub.com/search"
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://game-name-generator-hub.com" },
          {
            name: "Search",
            url: "https://game-name-generator-hub.com/search",
          },
        ])}
      />
    </article>
  );
}

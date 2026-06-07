import type { Metadata } from "next";
import Link from "next/link";
import posts from "@/data/blog-posts.json";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Fantasy Naming Blog | Game Name Generator Hub",
  description:
    "Guides, tutorials, and inspiration for fantasy worldbuilding, RPG character names, clan names, guild names, kingdom names, and more. 15+ in-depth articles.",
};

const categories = [...new Set(posts.map((p) => p.category))];

export default function BlogPage() {
  const featured = posts.slice(0, 3);
  const latest = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <article className="mx-auto max-w-4xl">
      <h1 className="mb-2 text-4xl font-extrabold">Blog</h1>
      <p className="mb-10 text-gray-400">
        Naming guides, worldbuilding tips, and gaming community advice —{" "}
        {posts.length}+ in-depth articles.
      </p>

      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-bold">Featured Posts</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-600"
            >
              <span className="mb-2 inline-block rounded-full border border-gray-700 px-2 py-0.5 text-xs text-gray-400">
                {post.category}
              </span>
              <h3 className="mb-2 font-semibold text-white">{post.title}</h3>
              <p className="text-xs text-gray-500">
                {post.date} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-bold">Latest Articles</h2>
        <div className="space-y-4">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-gray-800 bg-gray-900 p-4 transition hover:border-gray-600"
            >
              <div className="min-w-0 flex-1">
                <span className="mb-1 inline-block rounded-full border border-gray-700 px-2 py-0.5 text-xs text-gray-400">
                  {post.category}
                </span>
                <h3 className="font-semibold text-white">{post.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{post.description}</p>
              </div>
              <span className="shrink-0 text-xs text-gray-500">
                {post.date}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-bold">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-gray-300"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Search */}
      <section className="mb-10 rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <h2 className="mb-3 text-xl font-bold">Search Articles</h2>
        <form action="/search" method="GET" className="flex gap-3">
          <input
            type="hidden" name="type" value="blog" />
          <input
            type="text"
            name="q"
            placeholder='Search blog articles...'
            className="flex-1 rounded-xl border border-gray-700 bg-gray-800 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition focus:border-gray-500"
          />
          <button
            type="submit"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
          >
            Search
          </button>
        </form>
      </section>

      <JsonLd
        data={webPageSchema(
          "Blog — Game Name Generator Hub",
          "Read our blog for fantasy naming guides, RPG worldbuilding tips, gaming community advice.",
          "https://game-name-generator-hub.com/blog"
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://game-name-generator-hub.com" },
          { name: "Blog", url: "https://game-name-generator-hub.com/blog" },
        ])}
      />
    </article>
  );
}

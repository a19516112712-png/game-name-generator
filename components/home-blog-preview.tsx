import Link from "next/link";
import posts from "@/data/blog-posts.json";

const latestPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6);

export default function HomeBlogPreview() {
  return (
    <section className="mb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Latest Fantasy Naming Guides</h2>
        <Link
          href="/blog"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          View All Articles →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-600 hover:bg-gray-800"
          >
            <span className="mb-3 inline-block rounded-full border border-gray-700 px-2 py-0.5 text-xs text-gray-400">
              {post.category}
            </span>
            <h3 className="mb-2 text-base font-semibold leading-snug text-white group-hover:underline">
              {post.title}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-gray-400 line-clamp-3">
              {post.description.slice(0, 120)}
              {post.description.length > 120 ? "…" : ""}
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
  );
}

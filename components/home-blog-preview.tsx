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
        {latestPosts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/50"
          >
            {/* Thumbnail placeholder */}
            <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl opacity-30">
                  {["📖","📚","✍️","📝","📰","📋"][i % 6]}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
                <span className="rounded-full border border-gray-700 px-2.5 py-0.5 text-gray-400">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-xs font-medium text-gray-300">
                  GN
                </span>
                <span>Game Name Hub</span>
                <span className="text-gray-600">·</span>
                <span>5 min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

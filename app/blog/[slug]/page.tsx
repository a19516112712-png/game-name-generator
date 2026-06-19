import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import posts from "@/data/blog-posts.json";
import pages from "@/data/pages.json";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return { title: "Not Found" };

  const url = `https://toppicksbase.com/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  // Related generators (5 random)
  const seed = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const shuffled = [...pages].sort(() => 0.5 - Math.sin(seed));
  const relatedGenerators = shuffled.slice(0, 5);

  // Related posts (3 other posts)
  const relatedPosts = posts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/blog"
        className="mb-6 inline-block text-sm text-gray-400 transition hover:text-white"
      >
        ← Back to Blog
      </Link>

      <div className="mb-6 flex items-center gap-3 text-sm text-gray-500">
        <span className="rounded-full border border-gray-700 px-2 py-0.5 text-xs">
          {post.category}
        </span>
        <span>{post.date}</span>
        <span>·</span>
        <span>By TopPicksBase Editorial Team</span>
        <span>·</span>
        <span>Updated {post.date}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>

      <h1 className="mb-8 text-4xl font-extrabold">{post.title}</h1>

      <div
        className="prose prose-invert prose-gray max-w-none space-y-6 leading-relaxed text-gray-300
          [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white
          [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-100
          [&_p]:leading-relaxed
          [&_ul]:list-inside [&_ul]:list-disc [&_ul]:space-y-2
          [&_strong]:text-white"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Internal Links */}
      <section className="mt-12 border-t border-gray-800 pt-8">
        <h2 className="mb-4 text-xl font-bold">Try These Name Generators</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {relatedGenerators.map((g) => (
            <Link
              key={g.slug}
              href={`/${g.slug}`}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-3 text-sm text-gray-300 transition hover:border-gray-600 hover:text-white"
            >
              {g.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Related Posts */}
      <section className="mt-8 border-t border-gray-800 pt-8">
        <h2 className="mb-4 text-xl font-bold">Related Articles</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {relatedPosts.map((rp) => (
            <Link
              key={rp.slug}
              href={`/blog/${rp.slug}`}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 text-sm transition hover:border-gray-600"
            >
              <span className="font-medium text-white">{rp.title}</span>
              <p className="mt-1 text-xs text-gray-500">{rp.readTime}</p>
            </Link>
          ))}
        </div>
      </section>

      <JsonLd data={webPageSchema(
        post.title,
        post.description,
        `https://toppicksbase.com/blog/${post.slug}`
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://toppicksbase.com" },
        { name: "Blog", url: "https://toppicksbase.com/blog" },
        { name: post.title, url: `https://toppicksbase.com/blog/${post.slug}` }
      ])} />
      <JsonLd data={articleSchema(
        post.title,
        post.description,
        `https://toppicksbase.com/blog/${post.slug}`,
        post.date,
        post.category
      )} />
    </article>
  );
}

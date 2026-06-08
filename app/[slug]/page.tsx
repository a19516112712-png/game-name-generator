import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import pages from "@/data/pages.json";
import { generateContent } from "@/lib/content";
import { JsonLd } from "@/components/json-ld";
import AdPlaceholder from "@/components/ad-placeholder";
import { webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import posts from "@/data/blog-posts.json";

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

function getPage(slug: string) {
  return pages.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);

  if (!page) {
    return { title: "Not Found" };
  }

  const title = `${page.theme} ${page.race} ${page.context} Name Generator`;
  const description = `Generate unique ${page.theme} ${page.race} ${page.context} names with meanings, lore and fantasy inspiration. Free name generator with 100+ names, naming guide, FAQ, and related generators.`;
  const keywords = [
    `${page.theme.toLowerCase()} ${page.race.toLowerCase()} ${page.context.toLowerCase()} names`,
    `fantasy ${page.context.toLowerCase()} names`,
    `${page.race.toLowerCase()} ${page.context.toLowerCase()} generator`,
    `${page.theme.toLowerCase()} ${page.race.toLowerCase()} name generator`,
    `free ${page.context.toLowerCase()} name generator`,
  ].join(", ");

  const url = `https://toppicksbase.com/${page.slug}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      title,
      description,
    },
  };
}

const BASE_URL = "https://toppicksbase.com";

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);

  if (!page) {
    notFound();
  }

  const content = generateContent(page.theme, page.race, page.context);

  // ItemList schema for the 100 names
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": content.names.slice(0, 20).map((n, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": n.name,
      "description": n.meaning,
    })),
  };

  return (
    <article>
      {/* Back link */}
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-gray-400 transition hover:text-white"
      >
        ← 返回首页
      </Link>

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/search?q=${page.theme.toLowerCase()}`} className="hover:text-white transition-colors">{page.theme}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/search?q=${page.race.toLowerCase()}`} className="hover:text-white transition-colors">{page.race}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-300">{page.context}</li>
        </ol>
      </nav>

      {/* Hero */}
      <h1 className="mb-4 text-4xl font-extrabold">{page.title}</h1>
      <p className="mb-8 text-lg leading-relaxed text-gray-300">
        Generate unique {page.theme.toLowerCase()} {page.race.toLowerCase()}{" "}
        {page.context.toLowerCase()} names with meanings, lore, and fantasy
        inspiration. Free name generator with 100+ names, naming guide, FAQ,
        and related generators.
      </p>

      <dl className="mb-10 grid gap-4 sm:grid-cols-3">
        {(["theme", "race", "context"] as const).map((key) => (
          <div
            key={key}
            className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-900/50 p-5 transition hover:border-gray-600"
          >
            <dt className="mb-1 text-sm uppercase tracking-wider text-gray-500">
              {key}
            </dt>
            <dd className="text-2xl font-semibold">{page[key]}</dd>
          </div>
        ))}
      </dl>

      {/* Ad Slot 1: After Hero */}
      <AdPlaceholder label="Advertisement" />

      {/* 1. Introduction */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
        <p className="leading-relaxed text-gray-300">{content.introduction}</p>
      </section>

      {/* 2. Name Meanings */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Name Meanings Explained</h2>
        <p className="leading-relaxed text-gray-300">{content.nameMeaningsIntro}</p>
      </section>

      {/* 3. Naming Guide */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Naming Guide</h2>
        <div className="space-y-4 leading-relaxed text-gray-300">
          {content.namingGuide.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* Ad Slot 2: 25% */}
      <AdPlaceholder label="Advertisement" />

      {/* 4. Naming Rules */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Naming Rules for {page.theme} {page.race} {page.context}</h2>
        <div className="space-y-3">
          {content.namingRules.map((rule, i) => (
            <div key={i} className="rounded-xl border border-gray-800 bg-gray-900/50 p-4">
              <p className="text-sm leading-relaxed text-gray-300">{rule}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Name Examples (100) */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Name Examples</h2>
        <p className="mb-6 text-gray-500">
          Showing 100 generated {page.theme.toLowerCase()} {page.race.toLowerCase()}{" "}
          {page.context.toLowerCase()} names with meanings.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.names.map((n, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-3 transition hover:border-gray-600"
            >
              <span className="font-semibold text-white">{n.name}</span>
              <span className="ml-2 text-sm text-gray-500">{n.meaning}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Slot 3: 50% */}
      <AdPlaceholder label="Advertisement" />

      {/* 6. Featured Names (20) */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Featured Names</h2>
        <p className="mb-6 text-gray-500">
          Our top 20 curated {page.theme.toLowerCase()} {page.race.toLowerCase()}{" "}
          {page.context.toLowerCase()} names with detailed lore.
        </p>
        <div className="space-y-5">
          {content.featured.map((n, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-600"
            >
              <h3 className="mb-1 text-xl font-semibold">{n.name}</h3>
              <p className="mb-2 text-sm text-gray-400">{n.meaning}</p>
              <p className="text-sm leading-relaxed text-gray-500">{n.lore}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Lore Ideas */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Lore Ideas for Your {page.theme} {page.race} {page.context}</h2>
        <div className="space-y-4">
          {content.loreIdeas.map((idea, i) => (
            <div key={i} className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition hover:border-gray-600">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-900/50 text-xs font-bold text-purple-300">
                  {i + 1}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-500">Lore Idea</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">{idea}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Slot 4: 75% */}
      <AdPlaceholder label="Advertisement" />

      {/* 8. FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {content.faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-gray-800 bg-gray-900/50 transition hover:border-gray-700"
            >
              <summary className="cursor-pointer p-5 pr-12 font-medium text-white marker:text-transparent relative">
                <span className="absolute right-5 top-5 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                {faq.question}
              </summary>
              <p className="border-t border-gray-800 px-5 pb-5 pt-4 leading-relaxed text-gray-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Ad Slot 5: Before Footer */}
      <AdPlaceholder label="Advertisement" />

      {/* 9. Related Generators (12) */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Related Generators</h2>
        <p className="mb-6 text-gray-500">
          Discover more fantasy name generators related to {page.theme.toLowerCase()}{" "}
          themes, {page.race.toLowerCase()} races, and {page.context.toLowerCase()} contexts.
          Each generator provides unique names with meanings and lore.
        </p>

        {/* Related by Theme */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-gray-200">
            Related by Theme — {page.theme}
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {content.related.byTheme.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="rounded-lg border border-gray-800 bg-gray-900/50 p-3 text-sm text-gray-300 transition hover:border-gray-600 hover:text-white hover:bg-gray-800/50"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Related by Race */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-gray-200">
            Related by Race — {page.race}
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {content.related.byRace.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="rounded-lg border border-gray-800 bg-gray-900/50 p-3 text-sm text-gray-300 transition hover:border-gray-600 hover:text-white hover:bg-gray-800/50"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Related by Context */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-gray-200">
            Related by Context — {page.context}
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {content.related.byContext.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="rounded-lg border border-gray-800 bg-gray-900/50 p-3 text-sm text-gray-300 transition hover:border-gray-600 hover:text-white hover:bg-gray-800/50"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. People Also Search */}
      <section className="mb-12 rounded-2xl border border-gray-800 bg-gray-900/30 p-8">
        <h2 className="mb-4 text-2xl font-bold">People Also Search</h2>
        <p className="mb-6 text-sm text-gray-500">
          Related search terms that other worldbuilders are exploring.
        </p>
        <div className="flex flex-wrap gap-2">
          {content.peopleAlsoSearch.map((term) => (
            <Link
              key={term}
              href={`/search?q=${encodeURIComponent(term)}`}
              className="rounded-lg border border-gray-700 bg-gray-800/40 px-3 py-1.5 text-xs text-gray-400 transition hover:border-gray-500 hover:bg-gray-800 hover:text-white"
            >
              {term}
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Slot 6: Before Footer */}
      <AdPlaceholder label="Advertisement" />

      {/* Schemas */}
      <JsonLd data={webPageSchema(
        page.title,
        `Generate unique ${page.theme} ${page.race} ${page.context} names with meanings, lore and fantasy inspiration.`,
        `${BASE_URL}/${page.slug}`
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: BASE_URL },
        { name: page.theme, url: `${BASE_URL}/search?q=${page.theme.toLowerCase()}` },
        { name: page.race, url: `${BASE_URL}/search?q=${page.race.toLowerCase()}` },
        { name: page.title, url: `${BASE_URL}/${page.slug}` },
      ])} />
      <JsonLd data={faqSchema(content.faqs)} />
      <JsonLd data={itemListSchema} />

      {/* Related Articles */}
      <section className="border-t border-gray-800 pt-12">
        <h2 className="mb-5 text-2xl font-bold">Related Articles</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {(() => {
            const seed = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
            const shuffled = [...posts].sort(() => 0.5 - Math.sin(seed));
            return shuffled.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-xl border border-gray-800 bg-gray-900 p-4 transition hover:border-gray-600 hover:bg-gray-800"
              >
                <span className="mb-2 inline-block rounded-full border border-gray-700 px-2 py-0.5 text-xs text-gray-400">
                  {post.category}
                </span>
                <h3 className="text-sm font-semibold text-white">{post.title}</h3>
                <p className="mt-1 text-xs text-gray-500">{post.readTime}</p>
              </Link>
            ));
          })()}
        </div>
      </section>
    </article>
  );
}

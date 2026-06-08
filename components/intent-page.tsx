import Link from "next/link";
import type { Metadata } from "next";
import intents from "@/data/intent-pages.json";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function getIntent(slug: string) {
  return intents.find((i) => i.slug === slug) || null;
}

export function getIntentMetadata(slug: string): Metadata {
  const intent = getIntent(slug);
  if (!intent) return { title: "Not Found" };

  const url = `https://toppicksbase.com/${slug}`;

  return {
    title: intent.title,
    description: intent.description,
    keywords: intent.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: intent.title,
      description: intent.description,
      type: "website",
    },
    twitter: {
      title: intent.title,
      description: intent.description,
    },
  };
}

export function IntentPageContent({ slug }: { slug: string }) {
  const intent = getIntent(slug);
  if (!intent) return null;

  const names = intent._names || [];
  const featured = intent._featured || [];
  const faqs = intent._faqs || [];
  const related = intent._related || [];

  return (
    <article>
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-gray-400 transition hover:text-white"
      >
        ← Back to Home
      </Link>

      <h1 className="mb-4 text-4xl font-extrabold">{intent.title}</h1>

      <div
        className="prose prose-invert prose-gray mb-10 max-w-none space-y-4 leading-relaxed text-gray-300
          [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white
          [&_p]:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: intent.intro }}
      />

      {/* Naming Guide */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Naming Guide</h2>
        <div
          className="prose prose-invert prose-gray max-w-none space-y-4 leading-relaxed text-gray-300
            [&_p]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: intent.namingGuide }}
        />
      </section>

      {/* 100 Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Name Examples</h2>
        <p className="mb-6 text-gray-500">
          Showing 100 generated {intent.intentName.toLowerCase()} names with
          meanings.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {names.map((n: { name: string; meaning: string }, i: number) => (
            <div
              key={i}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-3"
            >
              <span className="font-semibold text-white">{n.name}</span>
              <span className="ml-2 text-sm text-gray-500">{n.meaning}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 20 Featured */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Featured Names</h2>
        <p className="mb-6 text-gray-500">
          Our top 20 curated {intent.intentName.toLowerCase()} names with
          detailed lore.
        </p>
        <div className="space-y-5">
          {featured.map(
            (
              n: { name: string; meaning: string; lore: string },
              i: number
            ) => (
              <div
                key={i}
                className="rounded-xl border border-gray-800 bg-gray-900 p-5"
              >
                <h3 className="mb-1 text-xl font-semibold">{n.name}</h3>
                <p className="mb-2 text-sm text-gray-400">{n.meaning}</p>
                <p className="text-sm leading-relaxed text-gray-500">
                  {n.lore}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map(
            (faq: { question: string; answer: string }, i: number) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-800 bg-gray-900"
              >
                <summary className="cursor-pointer p-5 font-medium text-white">
                  {faq.question}
                </summary>
                <p className="border-t border-gray-800 px-5 pb-5 pt-4 leading-relaxed text-gray-400">
                  {faq.answer}
                </p>
              </details>
            )
          )}
        </div>
      </section>

      {/* Related Generators */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Related Generators</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {related.map(
            (r: { slug: string; title: string }, i: number) => (
              <Link
                key={i}
                href={`/${r.slug}`}
                className="rounded-lg border border-gray-800 bg-gray-900/50 p-3 text-sm text-gray-300 transition hover:border-gray-600 hover:text-white"
              >
                {r.title}
              </Link>
            )
          )}
        </div>
      </section>

      <JsonLd data={webPageSchema(
        intent.title,
        intent.description,
        `https://toppicksbase.com/${intent.slug}`
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://toppicksbase.com" },
        { name: intent.title, url: `https://toppicksbase.com/${intent.slug}` }
      ])} />
      <JsonLd data={faqSchema(faqs)} />
    </article>
  );
}

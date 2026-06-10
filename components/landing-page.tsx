import type { Metadata } from "next";
import Link from "next/link";
import pages from "@/data/pages.json";
import posts from "@/data/blog-posts.json";
import { JsonLd } from "@/components/json-ld";
import AdPlaceholder from "@/components/ad-placeholder";

const BASE_URL = "https://toppicksbase.com";

// Parse slug like "dark-kingdom-names" -> { modifier: "dark", context: "kingdom" }
// Parse slug like "dark-kingdom-names" -> { modifier: "dark", context: "kingdom" }
// Also handles "female-character-name-generator" -> { modifier: "female", context: "character" }
function parseSlug(slug: string) {
  // Pattern 1: X-Y-names (e.g., dark-kingdom-names)
  const namesMatch = slug.match(/^(.+)-(\w+)-names$/);
  if (namesMatch) {
    const modifier = namesMatch[1].replace(/-/g, " ");
    const context = namesMatch[2];
    const title = modifier.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " " +
      context.charAt(0).toUpperCase() + context.slice(1) + " Names";
    return { modifier, context, title };
  }
  
  // Pattern 2: X-Y-name-generator (e.g., female-character-name-generator)
  const genMatch = slug.match(/^(.+)-(\w+)-name-generator$/);
  if (genMatch) {
    const modifier = genMatch[1].replace(/-/g, " ");
    const context = genMatch[2];
    const title = modifier.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " " +
      context.charAt(0).toUpperCase() + context.slice(1) + " Names";
    return { modifier, context, title };
  }
  
  return null;
}

export function getLandingMetadata(slug: string): Metadata {
  const parsed = parseSlug(slug);
  if (!parsed) return { title: "Not Found" };
  
  const title = `${parsed.title} Generator — Free ${parsed.title}`;
  const description = `Generate unique ${parsed.modifier} ${parsed.context} names for fantasy worldbuilding, RPG campaigns, and creative writing. Free name generator with meanings and lore.`;
  
  return {
    title,
    description,
    keywords: `${parsed.modifier} ${parsed.context} names, ${parsed.modifier} ${parsed.context} name generator, fantasy ${parsed.context} names`,
    alternates: { canonical: `${BASE_URL}/${slug}` },
    openGraph: { title, description, type: "website" },
    twitter: { title, description },
  };
}

export default function LandingPage({ slug }: { slug: string }) {
  const parsed = parseSlug(slug);
  if (!parsed) return null;

  const { modifier, context, title } = parsed;
  const contextLower = context.toLowerCase();

  // Find related generators
  let related = pages
    .filter(p => p.context?.toLowerCase() === contextLower || p.slug.includes(contextLower))
    .slice(0, 8);
  if (related.length < 4) {
    related = pages.filter(p => p.slug.includes(contextLower)).slice(0, 12);
  }
  if (related.length === 0) {
    related = pages.slice(0, 8);
  }

  const faqs: { question: string; answer: string }[] = [
    {
      question: `What are ${modifier} ${context} names?`,
      answer: `${modifier.charAt(0).toUpperCase() + modifier.slice(1)} ${context} names are a specialized category of fantasy names that combine ${modifier} thematic elements with ${context} organizational structures. They are popular among worldbuilders, RPG players, and fantasy writers seeking names with a specific ${modifier} aesthetic.`,
    },
    {
      question: `How do I generate ${modifier} ${context} names?`,
      answer: `Use our free name generators to create unique ${modifier} ${context} names instantly. Each generator produces 100 names with individual meanings, plus 20 featured names with detailed lore and backstory. Simply browse our collection and click any generator to get started.`,
    },
    {
      question: `Are these names free for commercial use?`,
      answer: `Yes! All names generated on our platform are 100% free for both personal and commercial use. You can use them in published works, commercial games, or any creative project without attribution or payment.`,
    },
    {
      question: `What makes a good ${modifier} ${context} name?`,
      answer: `A great ${modifier} ${context} name should capture the essence of the ${modifier} theme — whether it implies darkness, power, mystery, or elegance — while following the naming conventions of ${context}s. The best names are memorable, meaningful, and feel authentic to their fantasy setting.`,
    },
    {
      question: `Can I use these names for D&D?`,
      answer: `Absolutely! Our ${modifier} ${context} names are perfect for Dungeons & Dragons campaigns, Pathfinder adventures, and any tabletop RPG setting. Dungeon Masters regularly use our generators to create names for kingdoms, factions, and organizations in their campaigns.`,
    },
    {
      question: `How many ${modifier} ${context} names are available?`,
      answer: `Our platform offers thousands of ${modifier}-themed ${context} name variations through our generator system. Each generator produces 100 unique names with meanings, and with 20 themes × 15 races × 15 contexts, the total number of available names exceeds 450,000.`,
    },
  ];

  // People also search
  const peopleAlsoSearch = [
    `${modifier} ${context} name generator`,
    `fantasy ${context} names`,
    `cool ${context} names`,
    `unique ${context} names`,
    `best ${context} name ideas`,
    `medieval ${context} names`,
    `${modifier} fantasy names`,
    `RPG ${context} names`,
    `D&D ${context} names`,
    `epic ${context} names`,
    `legendary ${context} names`,
    `${context} naming guide`,
    `${modifier} ${context} ideas`,
    `${context} names for worldbuilding`,
    `creative ${context} names`,
  ];

  return (
    <article>
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-300">{title}</li>
        </ol>
      </nav>

      <h1 className="mb-4 text-4xl font-extrabold">{title} Generator</h1>
      <p className="mb-8 text-lg leading-relaxed text-gray-300">
        Generate unique {modifier} {contextLower} names for fantasy worldbuilding,
        RPG campaigns, and creative writing. Free name generator with 100+ names,
        meanings, and lore.
      </p>

      <AdPlaceholder label="Advertisement" />

      {/* What Is */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">What Are {title}?</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            {title.charAt(0).toUpperCase() + title.slice(1)} represent a specific category
            within fantasy naming that combines <strong className="text-white">{modifier}</strong>{" "}
            thematic elements with <strong className="text-white">{contextLower}</strong> organizational
            structures. These names are particularly popular among worldbuilders creating dark fantasy
            settings, RPG dungeon masters designing ominous factions, and writers seeking names that
            convey specific atmospheric qualities.
          </p>
          <p>
            The {modifier} aesthetic in {contextLower} naming typically emphasizes themes of
            power, mystery, and ancient tradition. Names in this category often feature strong
            consonants, evocative prefixes, and suffixes that suggest authority, permanence, and
            otherworldly influence. This naming style works exceptionally well for antagonistic
            factions, forbidden realms, and organizations that operate in the shadows of your
            fantasy world.
          </p>
          <p>
            Our {modifier} {contextLower} name generators draw from carefully curated word pools
            that capture the essence of the {modifier} theme while respecting {contextLower} naming
            conventions. Each generator produces <strong className="text-white">100 unique names</strong>{" "}
            with individual meanings, <strong className="text-white">20 featured names</strong> with
            paragraph-length lore, and complete naming resources including guides and FAQs.
          </p>
        </div>
      </section>

      {/* Top Generators */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Top {title} Generators</h2>
        <p className="mb-6 text-gray-500">
          Browse our most popular {modifier} {contextLower} name generators.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-3.5 text-sm text-gray-300 transition hover:border-purple-500/40 hover:bg-gray-800 hover:text-white"
            >
              <span className="font-medium">{p.title}</span>
              <p className="mt-1 text-xs text-gray-500">{p.theme} · {p.race} · {p.context}</p>
            </Link>
          ))}
        </div>
      </section>

      <AdPlaceholder label="Advertisement" />

      {/* Naming Tips */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">{title} Naming Tips</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>Follow these tips to create authentic, memorable {modifier} {contextLower} names:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Embrace the {modifier} theme.</strong> Let the {modifier} element permeate every aspect of the name — from the root word to the suffix.</li>
            <li><strong className="text-white">Match the {contextLower} scale.</strong> A {contextLower} name should convey the appropriate scope — grand for empires, tight for clans.</li>
            <li><strong className="text-white">Use evocative language.</strong> Choose words that paint a picture: shadow, iron, blood, void, crystal, flame.</li>
            <li><strong className="text-white">Keep it pronounceable.</strong> The most memorable names balance uniqueness with accessibility.</li>
            <li><strong className="text-white">Consider the name&apos;s history.</strong> Great names hint at a deeper story — an ancient founder, a legendary battle, a sacred oath.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-gray-800 bg-gray-900/50 transition hover:border-gray-700">
              <summary className="cursor-pointer p-5 pr-12 font-medium text-white marker:text-transparent relative">
                <span className="absolute right-5 top-5 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                {faq.question}
              </summary>
              <p className="border-t border-gray-800 px-5 pb-5 pt-4 leading-relaxed text-gray-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <AdPlaceholder label="Advertisement" />

      {/* People Also Search */}
      <section className="mb-12 rounded-2xl border border-gray-800 bg-gray-900/30 p-8">
        <h2 className="mb-4 text-2xl font-bold">People Also Search</h2>
        <div className="flex flex-wrap gap-2">
          {peopleAlsoSearch.map((term) => (
            <Link key={term} href={`/search?q=${encodeURIComponent(term)}`} className="rounded-lg border border-gray-700 bg-gray-800/40 px-3 py-1.5 text-xs text-gray-400 transition hover:border-gray-500 hover:bg-gray-800 hover:text-white">
              {term}
            </Link>
          ))}
        </div>
      </section>

      {/* Schemas */}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": `Generate unique ${modifier} ${contextLower} names for fantasy, gaming, and RPG.`,
        "url": `${BASE_URL}/${slug}`,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": title, "item": `${BASE_URL}/${slug}` },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question", "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer },
        })),
      }} />
    </article>
  );
}

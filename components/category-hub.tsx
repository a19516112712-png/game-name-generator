import type { Metadata } from "next";
import Link from "next/link";
import pages from "@/data/pages.json";
import posts from "@/data/blog-posts.json";
import { JsonLd } from "@/components/json-ld";
import AdPlaceholder from "@/components/ad-placeholder";

const BASE_URL = "https://toppicksbase.com";

// Category definitions
const CATEGORIES: Record<string, {
  name: string;
  emoji: string;
  context: string;
  race: string;
  description: string;
}> = {
  "kingdom-names": { name: "Kingdom", emoji: "🏰", context: "Kingdom", race: "", description: "kingdom names for fantasy worldbuilding, RPG campaigns, and creative writing" },
  "clan-names": { name: "Clan", emoji: "⚔️", context: "Clan", race: "", description: "clan names for gaming, fantasy, esports teams, and RPG factions" },
  "guild-names": { name: "Guild", emoji: "🛡️", context: "Guild", race: "", description: "guild names for MMORPGs, online communities, and fantasy organizations" },
  "dragon-names": { name: "Dragon", emoji: "🐉", race: "Dragon", context: "", description: "dragon names for empires, kingdoms, clans, and legendary creatures" },
  "demon-names": { name: "Demon", emoji: "👹", race: "Demon", context: "", description: "demon names for legions, empires, clans, and infernal realms" },
  "angel-names": { name: "Angel", emoji: "😇", race: "Angel", context: "", description: "angel names for realms, alliances, orders, and celestial domains" },
  "vampire-names": { name: "Vampire", emoji: "🧛", race: "Vampire", context: "", description: "vampire names for clans, dynasties, courts, and gothic fantasy" },
  "orc-names": { name: "Orc", emoji: "👺", race: "Orc", context: "", description: "orc names for tribes, hordes, clans, and savage fantasy settings" },
  "empire-names": { name: "Empire", emoji: "👑", context: "Empire", race: "", description: "empire names for fantasy worldbuilding, RPG campaigns, and creative writing" },
  "elf-names": { name: "Elf", emoji: "🏹", race: "Elf", context: "", description: "elf names for kingdoms, realms, orders, and high fantasy worlds" },
  "npc-names": { name: "NPC", emoji: "🎭", context: "NPC", race: "", description: "NPC names for D&D, RPG campaigns, video games, and tabletop adventures" },
  "monster-names": { name: "Monster", emoji: "👾", context: "Monster", race: "", description: "monster names for D&D, RPG bestiaries, fantasy worldbuilding, and creature design" },
  "fantasy-city-names": { name: "Fantasy City", emoji: "🏙️", context: "City", race: "", description: "fantasy city names for worldbuilding, RPG campaigns, D&D settings, and creative writing" },
  "dungeon-names": { name: "Dungeon", emoji: "🏚️", context: "Dungeon", race: "", description: "dungeon names for D&D campaigns, RPG adventures, fantasy worldbuilding, and tabletop gaming" },
  "character-name-generator": { name: "Character", emoji: "🧑", context: "Character", race: "", description: "character names for RPGs, fantasy worlds, anime, gaming, and creative writing" },
};

export function getCategoryMetadata(slug: string): Metadata {
  const cat = CATEGORIES[slug];
  if (!cat) return { title: "Not Found" };

  const title = `${cat.name} Names Generator — Free ${cat.name} Name Generator Hub`;
  const description = `Generate unique ${cat.name.toLowerCase()} names for fantasy, gaming, and RPG. Free ${cat.name.toLowerCase()} name generator with meanings, lore, naming guides, FAQ, and 4,500+ related generators.`;
  const keywords = `${cat.name.toLowerCase()} names, ${cat.name.toLowerCase()} name generator, free ${cat.name.toLowerCase()} name generator, fantasy ${cat.name.toLowerCase()} names, RPG ${cat.name.toLowerCase()} names`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `${BASE_URL}/${slug}` },
    openGraph: { title, description, type: "website" },
    twitter: { title, description },
  };
}

function getTopGenerators(slug: string) {
  const cat = CATEGORIES[slug];
  let filtered = pages;
  if (cat.context) {
    filtered = pages.filter(p => p.context === cat.context);
  }
  if (cat.race) {
    filtered = pages.filter(p => p.race === cat.race);
  }
  if (filtered.length === 0) return pages.slice(0, 12);
  return filtered.slice(0, 12);
}

function getRelatedPosts(slug: string) {
  const cat = CATEGORIES[slug];
  const name = cat.name.toLowerCase();
  return posts
    .filter(p => 
      p.title.toLowerCase().includes(name) ||
      p.category?.toLowerCase().includes(name) ||
      p.keywords?.toLowerCase().includes(name)
    )
    .slice(0, 4);
}

function getPeopleAlsoSearch(slug: string): string[] {
  const cat = CATEGORIES[slug];
  const n = cat.name.toLowerCase();
  const themes = ["Dark", "Ancient", "Holy", "Fire", "Ice", "Shadow", "Crystal", "Arcane", "Infernal", "Celestial", "Golden", "Storm", "Blood", "Mystic", "Royal"];
  const contexts = ["Kingdom", "Empire", "Clan", "Guild", "Realm", "Dynasty", "Order", "Tribe", "Legion", "Alliance"];
  const races = ["Elf", "Dwarf", "Orc", "Vampire", "Undead", "Phoenix", "Titan", "Giant", "Werewolf", "Dragon"];
  
  const terms = [
    `${n} name generator`,
    `fantasy ${n} names`,
    `cool ${n} names`,
    `unique ${n} names`,
    `best ${n} names for RPG`,
    `D&D ${n} names`,
    `medieval ${n} names`,
    `epic ${n} names`,
    `legendary ${n} names`,
    `dark ${n} names`,
    `ancient ${n} names`,
    `${n} naming guide`,
    `${n} names for worldbuilding`,
    `MMORPG ${n} names`,
    `creative ${n} names`,
    `powerful ${n} names`,
    `mystical ${n} names`,
    `${n} names with meanings`,
    `${n} names generator free`,
    `fantasy world ${n} names`,
  ];
  return terms;
}

const FAQS = [
  { q: "NAME Names Generator?", a: "Our NAME name generator creates unique, fantasy-themed NAME names perfect for worldbuilding, RPG campaigns (D&D, Pathfinder), creative writing, and gaming communities. Each generated name comes with a meaning and can be combined with lore for deeper storytelling." },
  { q: "How many NAME names can I generate?", a: "With 20 themes, 15 races, and 15 contexts, our platform offers over 4,500 unique NAME name generators. Each generator produces 100 unique names with meanings, plus 20 featured names with full paragraph-length lore." },
  { q: "Are these NAME names free to use?", a: "Yes! All NAME names generated on our platform are 100% free for both personal and commercial use. No sign-up, no subscription, no attribution required." },
  { q: "What makes a good NAME name?", a: "A great NAME name should feel authentic to its fantasy setting, reflect the culture and values of the organization, be memorable and pronounceable, and ideally carry a deeper meaning or historical significance." },
  { q: "Can I use these for my D&D campaign?", a: "Absolutely! Our NAME names are designed for tabletop RPGs like Dungeons & Dragons and Pathfinder. Dungeon Masters use our generators to name kingdoms, guilds, factions, and organizations throughout their campaigns." },
  { q: "How are NAME names generated?", a: "Our NAME names are generated through a deterministic, rule-based template system using carefully crafted word pools and theme-specific modifiers. The seeded generation ensures the same URL always produces the same names." },
  { q: "Do you provide meanings for NAME names?", a: "Yes! Every NAME name in our generators includes a unique meaning. Additionally, 20 featured names per generator include full paragraphs of lore covering origin stories, cultural context, and legendary history." },
  { q: "What themes are available for NAME names?", a: "We offer 20 magical themes including Dark, Arcane, Celestial, Infernal, Mystic, Royal, Ancient, Blood, Crystal, Eternal, Fire, Frozen, Golden, Holy, Ice, Savage, Shadow, Storm, and Void — each creating distinct naming styles." },
];

export function CategoryHubContent({ slug }: { slug: string }) {
  const cat = CATEGORIES[slug];
  if (!cat) return null;

  const name = cat.name;
  const nameLower = name.toLowerCase();
  const topGens = getTopGenerators(slug);
  const relatedPosts = getRelatedPosts(slug);
  const peopleAlsoSearch = getPeopleAlsoSearch(slug);

  const faqs = FAQS.map(f => ({
    question: f.q.replace(/NAME/g, name),
    answer: f.a.replace(/NAME/g, name),
  }));

  const collectionSchema = cat.context ? {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${name} Names — Free ${name} Name Generator Hub`,
    "description": `Browse our collection of ${nameLower} name generators. Generate unique ${nameLower} names for fantasy, gaming, and RPG.`,
    "url": `${BASE_URL}/${slug}`,
    "hasPart": topGens.map((p, i) => ({
      "@type": "WebPage",
      "name": p.title,
      "url": `${BASE_URL}/${p.slug}`,
    })),
  } : {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${name} Names — Free ${name} Name Generator Hub`,
    "description": `Browse our collection of ${nameLower} name generators. Generate unique ${nameLower} names for fantasy, gaming, and RPG.`,
    "url": `${BASE_URL}/${slug}`,
    "hasPart": topGens.map((p, i) => ({
      "@type": "WebPage",
      "name": p.title,
      "url": `${BASE_URL}/${p.slug}`,
    })),
  };

  return (
    <article>
      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-300">{name} Names</li>
        </ol>
      </nav>

      {/* Hero */}
      <h1 className="mb-4 text-4xl font-extrabold">
        {name} Names Generator — Free {name} Name Generator Hub
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-gray-300">
        Welcome to the ultimate {nameLower} names generator hub. Browse our collection
        of {topGens.length}+ {nameLower} name generators, each producing 100 unique names
        with meanings, 20 featured names with lore, naming guides, and FAQs. Whether
        you&apos;re worldbuilding for a fantasy novel, preparing a D&D campaign, or naming
        your gaming clan, our {nameLower} name generators have you covered.
      </p>

      <AdPlaceholder label="Advertisement" />

      {/* What Is */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">What Is a {name} Name Generator?</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            A {nameLower} name generator is a specialized tool that creates unique, fantasy-themed
            names specifically designed for {nameLower}s. Unlike generic random name generators,
            our {nameLower} name generators understand the linguistic patterns, cultural conventions,
            and thematic elements that make {nameLower} names feel authentic and immersive.
          </p>
          <p>
            Our platform hosts the internet&apos;s largest collection of {nameLower} name generators,
            built on a systematic matrix of 20 magical themes, 15 fantasy races, and 15 organization
            types. This means you can generate {nameLower} names with specific thematic flavors —
            from Dark {name} names to Celestial {name} names to Infernal {name} names — ensuring
            you always find the exact aesthetic you need.
          </p>
          <p>
            Each {nameLower} name generator produces <strong className="text-white">100 unique names</strong>{" "}
            with individual meanings, plus <strong className="text-white">20 featured names</strong>{" "}
            with detailed paragraph-length lore. You also get a comprehensive naming guide, an
            introduction article, and a dedicated FAQ section — making each generator a complete
            worldbuilding resource, not just a name list.
          </p>
        </div>
      </section>

      {/* Why Use */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Why Use Our {name} Name Generators?</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            Naming is one of the hardest parts of creative work. A great {nameLower} name sets the
            tone for an entire faction, communicates the essence of a culture, and makes your world
            feel lived-in and authentic. But coming up with dozens of unique, meaningful names that
            all fit a consistent theme can be exhausting.
          </p>
          <p>
            Our generators solve this by combining carefully curated word pools with theme-specific
            modifiers and context-appropriate structures. The results follow the same linguistic
            patterns that real-world cultures use, creating names that sound like they belong
            together — names that could appear in a published fantasy novel or a professional game.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">100 names per generator</strong> — each with a unique meaning</li>
            <li><strong className="text-white">20 featured names with lore</strong> — full paragraphs of backstory</li>
            <li><strong className="text-white">Naming guides and FAQs</strong> — learn the conventions behind the names</li>
            <li><strong className="text-white">100% free</strong> — no sign-up, no subscription, commercial use allowed</li>
            <li><strong className="text-white">Deterministic generation</strong> — bookmark a URL, always get the same names</li>
          </ul>
        </div>
      </section>

      {/* Top Generators */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Top {name} Name Generators</h2>
        <p className="mb-6 text-gray-500">
          Our most popular {nameLower} name generators. Each includes 100 names with meanings,
          20 featured names with lore, and complete naming resources.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topGens.map((p) => (
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

      {/* Naming Guide */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">{name} Naming Guide</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            Creating effective {nameLower} names requires understanding the conventions that make
            names feel authentic within their fantasy context. Here are the key principles:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Phonetic consistency.</strong> {name} names should follow consistent sound patterns. Hard consonants convey strength, while flowing vowels suggest elegance or mysticism.</li>
            <li><strong className="text-white">Thematic alignment.</strong> The name should reflect the {nameLower}&apos;s core identity. A Dark {name} should have an ominous tone; a Celestial {name} should feel elevated and pure.</li>
            <li><strong className="text-white">Cultural grounding.</strong> Great {nameLower} names hint at the culture behind them — their history, values, and relationship to the world around them.</li>
            <li><strong className="text-white">Memorability.</strong> The best {nameLower} names are easy to remember and pronounce, making them effective in both written and spoken contexts.</li>
            <li><strong className="text-white">Scalability.</strong> Consider how the name works in different forms: the full formal name, shortened versions used by allies, and derogatory forms used by enemies.</li>
          </ul>
        </div>
      </section>

      <AdPlaceholder label="Advertisement" />

      {/* Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Examples of {name} Names</h2>
        <p className="mb-6 text-gray-500">
          Here are examples of {nameLower} names generated by our platform across different themes:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {topGens.slice(0, 6).map((p) => (
            <div key={p.slug} className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
              <h3 className="mb-2 font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-gray-400">
                A {p.theme.toLowerCase()} {p.race.toLowerCase()} {p.context.toLowerCase()} name generator
                producing 100 unique names with meanings, 20 featured names with detailed lore,
                and complete naming resources.
              </p>
              <Link href={`/${p.slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                Generate {p.theme} {p.context} Names →
              </Link>
            </div>
          ))}
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

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-800 pt-12 mb-12">
          <h2 className="mb-5 text-2xl font-bold">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedPosts.map((post) => (
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
            ))}
          </div>
        </section>
      )}

      {/* Schemas */}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${name} Names — Free ${name} Name Generator Hub`,
        "description": `Browse our collection of ${nameLower} name generators. Generate unique ${nameLower} names for fantasy, gaming, and RPG.`,
        "url": `${BASE_URL}/${slug}`,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": `${name} Names`, "item": `${BASE_URL}/${slug}` },
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
      <JsonLd data={collectionSchema} />
    </article>
  );
}

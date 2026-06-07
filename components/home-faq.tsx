import { JsonLd } from "@/components/json-ld";

const faqs = [
  {
    q: "What is Game Name Generator Hub?",
    a: "Game Name Generator Hub is the largest free fantasy name generator platform on the web, offering over 4,500 unique generators. Each generator combines 20 magical themes (Dark, Arcane, Infernal, Celestial, etc.) with 15 fantasy races (Elves, Dragons, Orcs, Vampires, etc.) and 15 organization types (Kingdoms, Empires, Clans, Guilds, etc.) to produce 100 unique names with meanings, 20 featured names with lore, naming guides, and FAQs.",
  },
  {
    q: "How many name generators are available?",
    a: "We currently offer exactly 4,500 unique name generators, created by systematically combining 20 themes × 15 races × 15 organization contexts. Each generator is a full resource page with 100 name examples with meanings, 20 featured names with detailed lore, a comprehensive naming guide, an introduction article, and a dedicated FAQ section.",
  },
  {
    q: "Are the generated names free to use?",
    a: "Yes — absolutely. All names generated on our platform are 100% free for both personal and commercial use. You can use them in your D&D campaigns, fantasy novels, video games, worldbuilding projects, tabletop RPGs like Pathfinder, MMORPG character creation, or any creative endeavor. No attribution, no payment, no sign-up required.",
  },
  {
    q: "How are the names generated?",
    a: "Our names are generated through a deterministic, rule-based template system. We use carefully crafted word pools (100+ prefix elements and 100+ suffix elements), theme-specific modifiers, and context-appropriate structures. The system uses seeded generation, meaning the same generator page will always produce exactly the same names — making our results reliable, bookmarkable, and shareable.",
  },
  {
    q: "What types of names can I generate?",
    a: "You can generate names for 15 different organization types: Kingdoms, Empires, Clans, Guilds, Legions, Realms, Factions, Teams, Squads, Nations, Dynasties, Orders, Tribes, Alliances, and Dominions. Each can be combined with any of our 20 themes (Dark, Dragon, Holy, Infernal, Arcane, etc.) and 15 races (Elves, Orcs, Dragons, Vampires, Dwarves, Angels, Demons, etc.).",
  },
  {
    q: "Do you provide meanings and lore for the names?",
    a: "Yes. Every generator includes 100 name examples, each with a unique meaning. Additionally, we feature 20 curated names with full paragraphs of lore — including origin stories, founding myths, cultural context, and legendary figures. This depth makes our generators ideal for worldbuilders and RPG dungeon masters who need rich, authentic-sounding content.",
  },
  {
    q: "How do I find related generators?",
    a: "Every generator page includes four categories of related links: Related by Theme, Related by Race, Related by Context, and Popular Generators. Our internal linking system features over 90,000 cross-references across all 4,500 pages, meaning you are never more than three clicks from any other generator. You can also use our search bar or browse by category from the homepage.",
  },
  {
    q: "Can I use these names for commercial projects?",
    a: "Yes. All names generated on Game Name Generator Hub are free for commercial use. You can use them in published books, commercial video games, paid RPG modules, mobile apps, or any revenue-generating project without licensing fees or attribution requirements. We believe creativity tools should be accessible to everyone.",
  },
  {
    q: "How is this different from other name generators?",
    a: "Unlike simple random name generators that output a bare list, each of our 4,500 generators is a complete resource page. You get an introduction article with historical and cultural context, a detailed naming guide explaining linguistic patterns, 100 names with individual meanings, 20 featured names with paragraph-length lore, and a dedicated FAQ section. It's not just a name list — it's a worldbuilding resource.",
  },
  {
    q: "Will the same page always show the same names?",
    a: "Yes. We use deterministic seeded generation, which means every generator URL always produces identical results. You can bookmark a page, share the link with friends or players, or reference it in your campaign notes, and the names will always be the same. This consistency makes our generators reliable tools for collaborative worldbuilding.",
  },
  {
    q: "Do you have generators for specific games?",
    a: "While our generators are designed for universal fantasy worldbuilding, they work perfectly with popular systems like Dungeons & Dragons (D&D), Pathfinder, World of Warcraft, The Elder Scrolls, Warhammer Fantasy, and other tabletop or video game RPGs. We also have dedicated pages for Minecraft, Roblox, Valorant, Fortnite, and other gaming communities.",
  },
  {
    q: "How often are new generators added?",
    a: "Our current library of 4,500 generators covers all possible combinations of our 20 themes, 15 races, and 15 contexts. We continuously improve existing generators by refining name pools, enhancing lore templates, and expanding naming guides. We also regularly add new blog articles covering advanced naming techniques, worldbuilding strategies, and genre-specific naming conventions.",
  },
];

export default function HomeFAQ() {
  return (
    <>
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-gray-800 bg-gray-900/50 transition hover:border-gray-700"
            >
              <summary className="cursor-pointer p-5 pr-12 font-medium text-white marker:text-transparent relative">
                <span className="absolute right-5 top-5 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                {faq.q}
              </summary>
              <p className="border-t border-gray-800 px-5 pb-5 pt-4 leading-relaxed text-gray-400">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      }} />
    </>
  );
}

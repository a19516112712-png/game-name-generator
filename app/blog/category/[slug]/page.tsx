import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import posts from "@/data/blog-posts.json";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const dynamicParams = false;

const categoryData: Record<string, { title: string; description: string; keywords: string }> = {
  fantasy: {
    title: "Fantasy Naming Guides — Blog Category",
    description: "Expert fantasy naming guides covering kingdoms, characters, worlds, and magical realms. Learn to create authentic fantasy names for your creative projects.",
    keywords: "fantasy naming, fantasy name guides, fantasy worldbuilding, fantasy character names",
  },
  rpg: {
    title: "RPG Naming Guides — Blog Category",
    description: "Comprehensive RPG naming guides for tabletop roleplaying games. Learn to name characters, worlds, campaigns, NPCs, and kingdoms for D&D, Pathfinder, and more.",
    keywords: "RPG naming, tabletop RPG names, D&D naming guides, RPG character names",
  },
  dnd: {
    title: "D&D Naming Guides — Blog Category",
    description: "Dungeons & Dragons naming guides for DMs and players. Learn to name NPCs, kingdoms, taverns, artifacts, and entire campaign settings.",
    keywords: "D&D naming, dungeon master naming, DnD names, D&D campaign names",
  },
  worldbuilding: {
    title: "Worldbuilding Guides — Blog Category",
    description: "Comprehensive worldbuilding guides focused on naming continents, cities, cultures, and magic systems. Create cohesive, believable fantasy worlds.",
    keywords: "worldbuilding, fantasy world building, worldbuilding names, naming fictional worlds",
  },
  clan: {
    title: "Clan Naming Guides — Blog Category",
    description: "Expert guides on naming clans for fantasy worlds, RPGs, competitive games, and esports. Create powerful, memorable clan identities.",
    keywords: "clan names, clan naming, gaming clans, fantasy clan names, esports clan names",
  },
  guild: {
    title: "Guild Naming Guides — Blog Category",
    description: "Complete guides to naming guilds for MMORPGs, fantasy worlds, and gaming communities. Attract members with the perfect guild name.",
    keywords: "guild names, guild naming, MMORPG guilds, fantasy guild names, gaming guilds",
  },
  kingdom: {
    title: "Kingdom Naming Guides — Blog Category",
    description: "Master the art of naming fantasy kingdoms. Guides covering linguistic patterns, cultural influences, and narrative naming strategies.",
    keywords: "kingdom names, fantasy kingdom naming, kingdom name ideas, medieval kingdom names",
  },
  roblox: {
    title: "Roblox Naming Guides — Blog Category",
    description: "Roblox naming guides for games, groups, and usernames. Learn SEO optimization and community-building naming strategies for the Roblox platform.",
    keywords: "roblox names, roblox game names, roblox group names, roblox naming guide",
  },
};

const categorySlugs = Object.keys(categoryData);

export function generateStaticParams() {
  return categorySlugs.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categoryData[slug];
  if (!cat) return { title: "Not Found" };

  const url = `https://game-name-generator-hub.com/blog/category/${slug}`;

  return {
    title: cat.title,
    description: cat.description,
    keywords: cat.keywords,
    alternates: { canonical: url },
    openGraph: { title: cat.title, description: cat.description, type: "website" },
    twitter: { title: cat.title, description: cat.description },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categoryData[slug];
  if (!cat) notFound();

  const categoryPosts = posts.filter(
    (p) => p.category.toLowerCase().replace(/\s+/g, "-").includes(slug) ||
           p.category.toLowerCase().includes(slug)
  );

  const categoryFaqs = [
    {
      question: `What kind of ${slug} naming guides do you offer?`,
      answer: `Our ${slug} naming guides cover everything from basic principles to advanced techniques. Each guide includes practical examples, naming patterns, and expert tips you can apply immediately to your creative projects.`,
    },
    {
      question: `How do I use these ${slug} naming guides?`,
      answer: `Browse the articles listed below. Each one is a comprehensive guide covering a specific aspect of ${slug} naming. Read them in any order — each article stands alone as a complete resource.`,
    },
    {
      question: `Are these ${slug} guides suitable for beginners?`,
      answer: `Absolutely! Our guides are designed to be accessible to beginners while providing depth that experienced creators will appreciate. Whether you are naming your first fantasy world or your hundredth, you will find valuable insights.`,
    },
    {
      question: `Can I use the names from these guides in my projects?`,
      answer: `Yes! All names and examples in our guides are free for personal and commercial use. Feel free to adapt them to your specific needs.`,
    },
    {
      question: `How often are new ${slug} guides added?`,
      answer: `We regularly publish new guides covering emerging trends and community requests. Bookmark this page or subscribe to stay updated on new content.`,
    },
  ];

  return (
    <article className="mx-auto max-w-4xl">
      <Link
        href="/blog"
        className="mb-6 inline-block text-sm text-gray-400 transition hover:text-white"
      >
        ← Back to Blog
      </Link>

      <h1 className="mb-3 text-4xl font-extrabold capitalize">
        {slug} Naming Guides
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-gray-400">
        {cat.description}
      </p>

      {/* Article List */}
      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-bold">
          {categoryPosts.length} Article{categoryPosts.length !== 1 ? "s" : ""}
        </h2>
        {categoryPosts.length > 0 ? (
          <div className="space-y-4">
            {categoryPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-600"
              >
                <div className="min-w-0 flex-1">
                  <span className="mb-1 inline-block rounded-full border border-gray-700 px-2 py-0.5 text-xs text-gray-400">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-white">{post.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{post.description}</p>
                </div>
                <span className="shrink-0 text-xs text-gray-500">
                  {post.date} · {post.readTime}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No articles in this category yet. Check back soon!</p>
        )}
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {categoryFaqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-gray-800 bg-gray-900">
              <summary className="cursor-pointer p-5 font-medium text-white">
                {faq.question}
              </summary>
              <p className="border-t border-gray-800 px-5 pb-5 pt-4 leading-relaxed text-gray-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Browse All */}
      <section className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center">
        <h2 className="mb-3 text-xl font-bold">Browse All Categories</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {categorySlugs.map((s) => (
            <Link
              key={s}
              href={`/blog/category/${s}`}
              className={`rounded-lg px-3 py-1.5 text-sm transition ${
                s === slug
                  ? "bg-gray-700 text-white"
                  : "border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Link>
          ))}
        </div>
      </section>

      <JsonLd
        data={webPageSchema(
          cat.title,
          cat.description,
          `https://game-name-generator-hub.com/blog/category/${slug}`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://game-name-generator-hub.com" },
          { name: "Blog", url: "https://game-name-generator-hub.com/blog" },
          {
            name: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Naming Guides`,
            url: `https://game-name-generator-hub.com/blog/category/${slug}`,
          },
        ])}
      />
      <JsonLd data={faqSchema(categoryFaqs)} />
    </article>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://toppicksbase.com/about" },
  title: "About Us — Game Name Generator Hub",
  description:
    "Learn about Game Name Generator Hub, the largest fantasy name generator with 4,500+ unique name generators for worldbuilders, RPG players, and writers.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-extrabold">About Game Name Generator Hub</h1>
      <p className="mb-8 text-sm text-gray-500">Last Updated: June 19, 2026</p>

      <section className="mb-8 space-y-4 leading-relaxed text-gray-300">
        <p>
          Welcome to Game Name Generator Hub, the internet&apos;s most comprehensive
          fantasy name generation platform. We provide over 4,500 unique name
          generators spanning 20 magical themes, 15 fantasy races, and 15 types of
          organizations — from kingdoms and empires to clans and guilds.
        </p>
        <p>
          Our mission is simple: give worldbuilders, dungeon masters, writers, and
          game developers the tools they need to create immersive, memorable names
          for their fantasy worlds. Every name we generate is unique, meaningful,
          and backed by rich lore that brings your creations to life.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
        <p className="leading-relaxed text-gray-300">
          Game Name Generator Hub was born from a simple frustration: spending
          hours trying to name fantasy kingdoms, only to end up with generic,
          uninspired results. We built this platform to solve that problem for
          everyone. Starting with just 810 generators in 2026, we quickly expanded
          to 4,500+ to cover every possible combination of theme, race, and
          organization type a fantasy creator could need.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">What Makes Us Different</h2>
        <ul className="list-inside list-disc space-y-3 leading-relaxed text-gray-300">
          <li>
            <strong className="text-white">Deterministic Generation:</strong>{" "}
            Every page always generates the same names — so you can bookmark,
            share, and reference results reliably.
          </li>
          <li>
            <strong className="text-white">Rich Content:</strong> Each generator
            includes 100 name examples, 20 featured names with detailed lore,
            naming guides, FAQs, and introduction articles — over 2,000 words per
            page.
          </li>
          <li>
            <strong className="text-white">No AI API:</strong> All content is
            generated through carefully crafted rule-based templates, ensuring
            consistency, speed, and zero external dependencies.
          </li>
          <li>
            <strong className="text-white">Static Generation:</strong> Every
            single page is pre-built as static HTML, meaning instant load times
            and perfect SEO.
          </li>
          <li>
            <strong className="text-white">Free Forever:</strong> No accounts, no
            paywalls, no limits. Generate as many names as you need.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Our Data</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Themes", value: "20" },
            { label: "Races", value: "15" },
            { label: "Contexts", value: "15" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-800 bg-gray-900 p-5 text-center"
            >
              <div className="text-3xl font-extrabold">{item.value}</div>
              <div className="mt-1 text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-gray-300">
          Combined, these produce{" "}
          <strong className="text-white">4,500 unique name generators</strong>,
          each generating 100+ names with full meanings and lore.
        </p>
      </section>

      <p className="text-gray-500">
        Have questions?{" "}
        <Link href="/contact" className="underline hover:text-white">
          Contact us
        </Link>
        .
      </p>

      <JsonLd data={webPageSchema(
        "About Us — Game Name Generator Hub",
        "Learn about Game Name Generator Hub, the largest fantasy name generator with 4,500+ unique name generators.",
        `https://toppicksbase.com/about`
      )} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://toppicksbase.com" },
        { name: "About Us", url: `https://toppicksbase.com/about` }
      ])} />
    </article>
  );
}

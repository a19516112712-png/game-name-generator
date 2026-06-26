import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import posts from "@/data/blog-posts.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://toppicksbase.com"),
  other: {
    "google-adsense-account": "ca-pub-6710458178434465",
  },
  title: {
    default: "Game Name Generator Hub — 4,500+ Fantasy Name Generators",
    template: "%s — Game Name Generator Hub",
  },
  description:
    "Generate unique fantasy names for kingdoms, empires, clans, guilds and more. 20 themes × 15 races × 15 contexts — 4,500+ free name generators with meanings and lore.",
  keywords:
    "fantasy name generator, game name generator, kingdom name generator, clan name generator, guild name generator, dragon name generator, free name generator",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Game Name Generator Hub — 4,500+ Free Fantasy Name Generators",
    description:
      "Generate unique fantasy names for kingdoms, empires, clans, guilds and more. 20 themes × 15 races × 15 contexts — 4,500+ free name generators with meanings and lore.",
    url: "https://toppicksbase.com",
    type: "website",
    siteName: "Game Name Generator Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Name Generator Hub — 4,500+ Free Fantasy Name Generators",
    description:
      "Generate unique fantasy names for kingdoms, empires, clans, guilds and more. The internet's largest collection of free fantasy name generators.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-950 text-white antialiased">
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6710458178434465"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Navbar />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-800 bg-gray-950">
          <div className="mx-auto max-w-7xl px-4 py-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Column 1: Brand */}
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  Game Name Generator Hub
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  4,500+ free fantasy name generators for worldbuilders, RPG
                  players, and writers. Create unique names with meanings and lore.
                </p>
                <div className="flex gap-3 text-gray-500">
                  <span className="text-lg">🐉</span>
                  <span className="text-lg">⚔️</span>
                  <span className="text-lg">👑</span>
                  <span className="text-lg">🛡️</span>
                </div>
              </div>

              {/* Column 2: Generators */}
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  Popular Generators
                </h3>
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <Link href="/dark-elf-kingdom-name-generator" className="hover:text-white transition-colors">Dark Elf Kingdom</Link>
                  <Link href="/fire-dragon-empire-name-generator" className="hover:text-white transition-colors">Fire Dragon Empire</Link>
                  <Link href="/holy-angel-realm-name-generator" className="hover:text-white transition-colors">Holy Angel Realm</Link>
                  <Link href="/infernal-demon-legion-name-generator" className="hover:text-white transition-colors">Infernal Demon Legion</Link>
                  <Link href="/shadow-vampire-clan-name-generator" className="hover:text-white transition-colors">Shadow Vampire Clan</Link>
                  <Link href="/search" className="hover:text-white transition-colors font-medium">View All Generators →</Link>
                </div>
              </div>

              {/* Column 3: Resources */}
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  Resources
                </h3>
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <Link href="/blog" className="hover:text-white transition-colors">Blog & Guides</Link>
                  <Link href="/search" className="hover:text-white transition-colors">Search Generators</Link>
                  <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                  <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                  <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                </div>
              </div>

              {/* Column 4: Latest Articles */}
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  Latest Articles
                </h3>
                <div className="flex flex-col gap-1.5 text-sm text-gray-400">
                  {posts.slice(0, 6).map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="truncate hover:text-white transition-colors">
                      {post.title}
                    </Link>
                  ))}
                  <Link href="/blog" className="mt-2 hover:text-white transition-colors font-medium">More Articles →</Link>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
              <p>© {new Date().getFullYear()} Game Name Generator Hub. All names are free for personal and commercial use.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

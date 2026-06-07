import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import posts from "@/data/blog-posts.json";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Game Name Generator Hub — 4,500+ Fantasy Name Generators",
    template: "%s — Game Name Generator Hub",
  },
  description:
    "Generate unique fantasy names for kingdoms, empires, clans, guilds and more. 20 themes × 15 races × 15 contexts — 4,500+ free name generators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-950 text-white antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <h3 className="mb-3 text-sm font-semibold text-white">
                  Game Name Generator Hub
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  4,500+ free fantasy name generators for worldbuilders, RPG
                  players, and writers.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold text-white">
                  Explore
                </h3>
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <Link href="/search" className="hover:text-white">Generators</Link>
                  <Link href="/blog" className="hover:text-white">Blog</Link>
                  <Link href="/search?q=dragon" className="hover:text-white">Popular Searches</Link>
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold text-white">
                  Latest Articles
                </h3>
                <div className="flex flex-col gap-1.5 text-sm text-gray-400">
                  {posts.slice(0, 5).map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="truncate hover:text-white">
                      {post.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold text-white">
                  Legal
                </h3>
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <Link href="/about" className="hover:text-white">About</Link>
                  <Link href="/contact" className="hover:text-white">Contact</Link>
                  <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                </div>
              </div>
            </div>
            <p className="mt-8 text-center text-xs text-gray-600">
              © {new Date().getFullYear()} Game Name Generator Hub. All names
              are free for personal and commercial use.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

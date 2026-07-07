import type { Metadata } from "next";
import SearchClient from "./search-client";

export const metadata: Metadata = {
  alternates: { canonical: "https://toppicksbase.com/search" },
  title: "Search — Game Name Generator Hub",
  description:
    "Search across 4,500+ name generators, intent pages, and blog articles. Find the perfect fantasy name generator for your needs.",
  openGraph: {
    title: "Search — Game Name Generator Hub",
    description:
      "Search across 4,500+ name generators, intent pages, and blog articles.",
    type: "website",
  },
  twitter: {
    title: "Search — Game Name Generator Hub",
    description:
      "Search across 4,500+ name generators, intent pages, and blog articles.",
  },
};

export default function SearchPage() {
  return <SearchClient />;
}

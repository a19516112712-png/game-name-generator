import type { Metadata } from "next";
import { getCategoryMetadata, CategoryHubContent } from "@/components/category-hub";

export const metadata: Metadata = getCategoryMetadata("character-name-generator");

export default function Page() {
  return <CategoryHubContent slug="character-name-generator" />;
}

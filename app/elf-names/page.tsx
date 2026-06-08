import type { Metadata } from "next";
import { getCategoryMetadata, CategoryHubContent } from "@/components/category-hub";

export const metadata: Metadata = getCategoryMetadata("elf-names");

export default function Page() {
  return <CategoryHubContent slug="elf-names" />;
}

import type { Metadata } from "next";
import { getCategoryMetadata, CategoryHubContent } from "@/components/category-hub";

export const metadata: Metadata = getCategoryMetadata("empire-names");

export default function Page() {
  return <CategoryHubContent slug="empire-names" />;
}

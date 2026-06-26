import type { Metadata } from "next";
import { getCategoryMetadata, CategoryHubContent } from "@/components/category-hub";
export const metadata: Metadata = getCategoryMetadata("pirate-names");
export default function Page() { return <CategoryHubContent slug="pirate-names" />; }

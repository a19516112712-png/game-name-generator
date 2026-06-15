import type { Metadata } from "next";
import { getCategoryMetadata, CategoryHubContent } from "@/components/category-hub";
export const metadata: Metadata = getCategoryMetadata("monster-names");
export default function Page() { return <CategoryHubContent slug="monster-names" />; }

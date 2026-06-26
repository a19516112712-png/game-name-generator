import type { Metadata } from "next";
import { getCategoryMetadata, CategoryHubContent } from "@/components/category-hub";
export const metadata: Metadata = getCategoryMetadata("knight-names");
export default function Page() { return <CategoryHubContent slug="knight-names" />; }

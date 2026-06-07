import type { Metadata } from "next";
import { getIntentMetadata, IntentPageContent } from "@/components/intent-page";

export const metadata: Metadata = getIntentMetadata("rpg-name-generator");

export default function Page() {
  return <IntentPageContent slug="rpg-name-generator" />;
}

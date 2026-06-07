import type { Metadata } from "next";
import { getIntentMetadata, IntentPageContent } from "@/components/intent-page";

export const metadata: Metadata = getIntentMetadata("valorant-name-generator");

export default function Page() {
  return <IntentPageContent slug="valorant-name-generator" />;
}

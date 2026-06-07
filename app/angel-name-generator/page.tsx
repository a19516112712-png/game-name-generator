import type { Metadata } from "next";
import { getIntentMetadata, IntentPageContent } from "@/components/intent-page";

export const metadata: Metadata = getIntentMetadata("angel-name-generator");

export default function Page() {
  return <IntentPageContent slug="angel-name-generator" />;
}

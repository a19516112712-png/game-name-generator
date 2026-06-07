import type { Metadata } from "next";
import { getIntentMetadata, IntentPageContent } from "@/components/intent-page";

export const metadata: Metadata = getIntentMetadata("minecraft-name-generator");

export default function Page() {
  return <IntentPageContent slug="minecraft-name-generator" />;
}

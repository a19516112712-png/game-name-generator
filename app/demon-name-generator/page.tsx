import type { Metadata } from "next";
import { getIntentMetadata, IntentPageContent } from "@/components/intent-page";

export const metadata: Metadata = getIntentMetadata("demon-name-generator");

export default function Page() {
  return <IntentPageContent slug="demon-name-generator" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("wizard-character-name-generator");

export default function Page() {
  return <LandingPage slug="wizard-character-name-generator" />;
}

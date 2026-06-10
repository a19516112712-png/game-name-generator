import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("archer-character-name-generator");

export default function Page() {
  return <LandingPage slug="archer-character-name-generator" />;
}

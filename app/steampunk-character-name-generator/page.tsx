import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("steampunk-character-name-generator");

export default function Page() {
  return <LandingPage slug="steampunk-character-name-generator" />;
}

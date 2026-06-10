import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("pirate-character-name-generator");

export default function Page() {
  return <LandingPage slug="pirate-character-name-generator" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("female-fantasy-character-name-generator");

export default function Page() {
  return <LandingPage slug="female-fantasy-character-name-generator" />;
}

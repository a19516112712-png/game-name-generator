import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("fairy-tale-character-name-generator");

export default function Page() {
  return <LandingPage slug="fairy-tale-character-name-generator" />;
}

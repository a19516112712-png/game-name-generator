import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("monk-character-name-generator");

export default function Page() {
  return <LandingPage slug="monk-character-name-generator" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("assassin-character-name-generator");

export default function Page() {
  return <LandingPage slug="assassin-character-name-generator" />;
}

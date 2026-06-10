import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dragon-character-name-generator");

export default function Page() {
  return <LandingPage slug="dragon-character-name-generator" />;
}

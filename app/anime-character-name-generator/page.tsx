import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("anime-character-name-generator");

export default function Page() {
  return <LandingPage slug="anime-character-name-generator" />;
}

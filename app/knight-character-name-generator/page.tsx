import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("knight-character-name-generator");

export default function Page() {
  return <LandingPage slug="knight-character-name-generator" />;
}

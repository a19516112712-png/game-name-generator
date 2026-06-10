import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("fantasy-character-name-generator");

export default function Page() {
  return <LandingPage slug="fantasy-character-name-generator" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("bard-character-name-generator");

export default function Page() {
  return <LandingPage slug="bard-character-name-generator" />;
}

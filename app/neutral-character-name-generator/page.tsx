import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("neutral-character-name-generator");

export default function Page() {
  return <LandingPage slug="neutral-character-name-generator" />;
}

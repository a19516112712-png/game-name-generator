import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("blood-tribe-names");

export default function Page() {
  return <LandingPage slug="blood-tribe-names" />;
}

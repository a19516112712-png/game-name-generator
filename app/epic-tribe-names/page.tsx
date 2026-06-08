import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("epic-tribe-names");

export default function Page() {
  return <LandingPage slug="epic-tribe-names" />;
}

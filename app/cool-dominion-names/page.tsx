import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cool-dominion-names");

export default function Page() {
  return <LandingPage slug="cool-dominion-names" />;
}

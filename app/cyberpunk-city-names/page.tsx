import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cyberpunk-city-names");

export default function Page() {
  return <LandingPage slug="cyberpunk-city-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("high-fantasy-city-names");

export default function Page() {
  return <LandingPage slug="high-fantasy-city-names" />;
}

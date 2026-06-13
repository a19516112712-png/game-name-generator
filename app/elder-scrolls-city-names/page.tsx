import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("elder-scrolls-city-names");

export default function Page() {
  return <LandingPage slug="elder-scrolls-city-names" />;
}

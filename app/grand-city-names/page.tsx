import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("grand-city-names");

export default function Page() {
  return <LandingPage slug="grand-city-names" />;
}

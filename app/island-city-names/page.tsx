import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("island-city-names");

export default function Page() {
  return <LandingPage slug="island-city-names" />;
}

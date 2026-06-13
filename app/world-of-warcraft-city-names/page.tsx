import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("world-of-warcraft-city-names");

export default function Page() {
  return <LandingPage slug="world-of-warcraft-city-names" />;
}

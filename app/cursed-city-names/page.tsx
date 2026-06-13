import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cursed-city-names");

export default function Page() {
  return <LandingPage slug="cursed-city-names" />;
}

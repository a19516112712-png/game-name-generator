import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("solar-city-names");

export default function Page() {
  return <LandingPage slug="solar-city-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("hidden-city-names");

export default function Page() {
  return <LandingPage slug="hidden-city-names" />;
}

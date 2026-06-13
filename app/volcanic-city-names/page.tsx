import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("volcanic-city-names");

export default function Page() {
  return <LandingPage slug="volcanic-city-names" />;
}

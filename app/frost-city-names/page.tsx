import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("frost-city-names");

export default function Page() {
  return <LandingPage slug="frost-city-names" />;
}

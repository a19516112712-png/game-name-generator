import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("fishing-city-names");

export default function Page() {
  return <LandingPage slug="fishing-city-names" />;
}

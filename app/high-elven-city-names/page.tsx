import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("high-elven-city-names");

export default function Page() {
  return <LandingPage slug="high-elven-city-names" />;
}

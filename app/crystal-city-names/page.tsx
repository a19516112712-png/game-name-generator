import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("crystal-city-names");

export default function Page() {
  return <LandingPage slug="crystal-city-names" />;
}

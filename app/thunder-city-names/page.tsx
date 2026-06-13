import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("thunder-city-names");

export default function Page() {
  return <LandingPage slug="thunder-city-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("ruined-city-names");

export default function Page() {
  return <LandingPage slug="ruined-city-names" />;
}

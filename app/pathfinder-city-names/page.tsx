import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("pathfinder-city-names");

export default function Page() {
  return <LandingPage slug="pathfinder-city-names" />;
}

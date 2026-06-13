import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dark-fantasy-city-names");

export default function Page() {
  return <LandingPage slug="dark-fantasy-city-names" />;
}

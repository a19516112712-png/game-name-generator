import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dystopian-city-names");

export default function Page() {
  return <LandingPage slug="dystopian-city-names" />;
}

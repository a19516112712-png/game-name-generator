import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("forest-city-names");

export default function Page() {
  return <LandingPage slug="forest-city-names" />;
}

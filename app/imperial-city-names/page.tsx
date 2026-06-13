import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("imperial-city-names");

export default function Page() {
  return <LandingPage slug="imperial-city-names" />;
}

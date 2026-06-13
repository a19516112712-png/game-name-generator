import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("orcish-desert-city-names");

export default function Page() {
  return <LandingPage slug="orcish-desert-city-names" />;
}

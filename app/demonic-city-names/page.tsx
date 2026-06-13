import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("demonic-city-names");

export default function Page() {
  return <LandingPage slug="demonic-city-names" />;
}

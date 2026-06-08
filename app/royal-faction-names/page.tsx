import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("royal-faction-names");

export default function Page() {
  return <LandingPage slug="royal-faction-names" />;
}

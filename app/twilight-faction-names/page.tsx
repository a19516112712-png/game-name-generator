import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("twilight-faction-names");

export default function Page() {
  return <LandingPage slug="twilight-faction-names" />;
}

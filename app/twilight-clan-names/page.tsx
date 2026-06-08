import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("twilight-clan-names");

export default function Page() {
  return <LandingPage slug="twilight-clan-names" />;
}

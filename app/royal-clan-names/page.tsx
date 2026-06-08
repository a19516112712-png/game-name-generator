import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("royal-clan-names");

export default function Page() {
  return <LandingPage slug="royal-clan-names" />;
}

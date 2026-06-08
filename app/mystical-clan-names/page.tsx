import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mystical-clan-names");

export default function Page() {
  return <LandingPage slug="mystical-clan-names" />;
}

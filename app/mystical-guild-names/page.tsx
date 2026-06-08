import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mystical-guild-names");

export default function Page() {
  return <LandingPage slug="mystical-guild-names" />;
}

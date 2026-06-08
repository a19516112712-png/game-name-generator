import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("risen-guild-names");

export default function Page() {
  return <LandingPage slug="risen-guild-names" />;
}

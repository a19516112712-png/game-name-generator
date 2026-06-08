import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("winter-guild-names");

export default function Page() {
  return <LandingPage slug="winter-guild-names" />;
}

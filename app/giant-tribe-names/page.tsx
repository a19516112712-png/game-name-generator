import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("giant-tribe-names");

export default function Page() {
  return <LandingPage slug="giant-tribe-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("hollow-tribe-names");

export default function Page() {
  return <LandingPage slug="hollow-tribe-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("legendary-tribe-names");

export default function Page() {
  return <LandingPage slug="legendary-tribe-names" />;
}

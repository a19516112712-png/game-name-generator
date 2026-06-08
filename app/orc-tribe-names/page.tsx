import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("orc-tribe-names");

export default function Page() {
  return <LandingPage slug="orc-tribe-names" />;
}

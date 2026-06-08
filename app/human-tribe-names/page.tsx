import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("human-tribe-names");

export default function Page() {
  return <LandingPage slug="human-tribe-names" />;
}

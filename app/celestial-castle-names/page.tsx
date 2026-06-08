import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("celestial-castle-names");

export default function Page() {
  return <LandingPage slug="celestial-castle-names" />;
}

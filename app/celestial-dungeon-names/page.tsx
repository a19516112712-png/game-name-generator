import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("celestial-dungeon-names");

export default function Page() {
  return <LandingPage slug="celestial-dungeon-names" />;
}

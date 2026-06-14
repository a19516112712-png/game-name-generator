import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("swamp-dungeon-names");

export default function Page() {
  return <LandingPage slug="swamp-dungeon-names" />;
}

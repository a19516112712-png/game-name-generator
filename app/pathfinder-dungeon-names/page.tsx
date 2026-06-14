import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("pathfinder-dungeon-names");

export default function Page() {
  return <LandingPage slug="pathfinder-dungeon-names" />;
}

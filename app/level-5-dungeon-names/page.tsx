import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("level-5-dungeon-names");

export default function Page() {
  return <LandingPage slug="level-5-dungeon-names" />;
}

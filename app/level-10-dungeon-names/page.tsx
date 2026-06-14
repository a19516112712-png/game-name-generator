import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("level-10-dungeon-names");

export default function Page() {
  return <LandingPage slug="level-10-dungeon-names" />;
}

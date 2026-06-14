import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cursed-dungeon-names");

export default function Page() {
  return <LandingPage slug="cursed-dungeon-names" />;
}

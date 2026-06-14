import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("one-shot-dungeon-names");

export default function Page() {
  return <LandingPage slug="one-shot-dungeon-names" />;
}

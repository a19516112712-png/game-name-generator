import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("psychic-dungeon-names");

export default function Page() {
  return <LandingPage slug="psychic-dungeon-names" />;
}

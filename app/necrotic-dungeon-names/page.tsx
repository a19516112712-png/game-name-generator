import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("necrotic-dungeon-names");

export default function Page() {
  return <LandingPage slug="necrotic-dungeon-names" />;
}

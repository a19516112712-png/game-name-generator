import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("nether-dungeon-names");

export default function Page() {
  return <LandingPage slug="nether-dungeon-names" />;
}

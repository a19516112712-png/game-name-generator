import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("maze-dungeon-names");

export default function Page() {
  return <LandingPage slug="maze-dungeon-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("forgotten-dungeon-names");

export default function Page() {
  return <LandingPage slug="forgotten-dungeon-names" />;
}

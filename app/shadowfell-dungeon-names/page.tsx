import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("shadowfell-dungeon-names");

export default function Page() {
  return <LandingPage slug="shadowfell-dungeon-names" />;
}

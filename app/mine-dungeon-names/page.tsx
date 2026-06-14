import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mine-dungeon-names");

export default function Page() {
  return <LandingPage slug="mine-dungeon-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("fire-dungeon-names");

export default function Page() {
  return <LandingPage slug="fire-dungeon-names" />;
}

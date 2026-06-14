import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mountain-dungeon-names");

export default function Page() {
  return <LandingPage slug="mountain-dungeon-names" />;
}

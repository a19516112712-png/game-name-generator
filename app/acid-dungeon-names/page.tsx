import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("acid-dungeon-names");

export default function Page() {
  return <LandingPage slug="acid-dungeon-names" />;
}

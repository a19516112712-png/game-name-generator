import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("temple-dungeon-names");

export default function Page() {
  return <LandingPage slug="temple-dungeon-names" />;
}

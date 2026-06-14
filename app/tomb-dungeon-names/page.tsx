import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("tomb-dungeon-names");

export default function Page() {
  return <LandingPage slug="tomb-dungeon-names" />;
}

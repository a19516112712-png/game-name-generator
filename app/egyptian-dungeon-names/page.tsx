import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("egyptian-dungeon-names");

export default function Page() {
  return <LandingPage slug="egyptian-dungeon-names" />;
}

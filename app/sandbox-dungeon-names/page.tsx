import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("sandbox-dungeon-names");

export default function Page() {
  return <LandingPage slug="sandbox-dungeon-names" />;
}

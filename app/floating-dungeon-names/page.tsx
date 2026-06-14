import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("floating-dungeon-names");

export default function Page() {
  return <LandingPage slug="floating-dungeon-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("divine-dungeon-names");

export default function Page() {
  return <LandingPage slug="divine-dungeon-names" />;
}

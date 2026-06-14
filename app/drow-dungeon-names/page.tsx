import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("drow-dungeon-names");

export default function Page() {
  return <LandingPage slug="drow-dungeon-names" />;
}

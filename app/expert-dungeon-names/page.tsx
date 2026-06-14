import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("expert-dungeon-names");

export default function Page() {
  return <LandingPage slug="expert-dungeon-names" />;
}

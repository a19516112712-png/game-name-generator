import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("ruins-dungeon-names");

export default function Page() {
  return <LandingPage slug="ruins-dungeon-names" />;
}

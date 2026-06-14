import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("beginner-dungeon-names");

export default function Page() {
  return <LandingPage slug="beginner-dungeon-names" />;
}

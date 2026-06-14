import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("haunted-dungeon-names");

export default function Page() {
  return <LandingPage slug="haunted-dungeon-names" />;
}

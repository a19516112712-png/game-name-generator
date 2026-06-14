import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("astral-dungeon-names");

export default function Page() {
  return <LandingPage slug="astral-dungeon-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("elf-dominion-names");

export default function Page() {
  return <LandingPage slug="elf-dominion-names" />;
}

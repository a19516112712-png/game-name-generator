import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("wood-elf-character-name-generator");

export default function Page() {
  return <LandingPage slug="wood-elf-character-name-generator" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("high-elf-character-name-generator");

export default function Page() {
  return <LandingPage slug="high-elf-character-name-generator" />;
}

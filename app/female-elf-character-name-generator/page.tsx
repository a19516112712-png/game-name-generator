import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("female-elf-character-name-generator");

export default function Page() {
  return <LandingPage slug="female-elf-character-name-generator" />;
}

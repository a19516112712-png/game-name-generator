import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dark-elf-character-name-generator");

export default function Page() {
  return <LandingPage slug="dark-elf-character-name-generator" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("sci-fi-character-name-generator");

export default function Page() {
  return <LandingPage slug="sci-fi-character-name-generator" />;
}

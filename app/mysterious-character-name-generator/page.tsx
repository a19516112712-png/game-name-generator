import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mysterious-character-name-generator");

export default function Page() {
  return <LandingPage slug="mysterious-character-name-generator" />;
}

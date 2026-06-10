import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("human-character-name-generator");

export default function Page() {
  return <LandingPage slug="human-character-name-generator" />;
}

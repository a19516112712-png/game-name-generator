import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("male-orc-character-name-generator");

export default function Page() {
  return <LandingPage slug="male-orc-character-name-generator" />;
}

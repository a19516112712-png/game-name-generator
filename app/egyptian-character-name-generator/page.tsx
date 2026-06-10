import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("egyptian-character-name-generator");

export default function Page() {
  return <LandingPage slug="egyptian-character-name-generator" />;
}

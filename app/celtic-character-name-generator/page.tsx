import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("celtic-character-name-generator");

export default function Page() {
  return <LandingPage slug="celtic-character-name-generator" />;
}

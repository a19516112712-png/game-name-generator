import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("japanese-character-name-generator");

export default function Page() {
  return <LandingPage slug="japanese-character-name-generator" />;
}

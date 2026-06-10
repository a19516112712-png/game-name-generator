import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("ninja-character-name-generator");

export default function Page() {
  return <LandingPage slug="ninja-character-name-generator" />;
}

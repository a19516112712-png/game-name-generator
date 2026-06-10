import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("non-binary-character-name-generator");

export default function Page() {
  return <LandingPage slug="non-binary-character-name-generator" />;
}

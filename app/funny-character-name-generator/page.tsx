import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("funny-character-name-generator");

export default function Page() {
  return <LandingPage slug="funny-character-name-generator" />;
}

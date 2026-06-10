import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("wild-west-character-name-generator");

export default function Page() {
  return <LandingPage slug="wild-west-character-name-generator" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("vampire-character-name-generator");

export default function Page() {
  return <LandingPage slug="vampire-character-name-generator" />;
}

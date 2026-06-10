import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("female-vampire-character-name-generator");

export default function Page() {
  return <LandingPage slug="female-vampire-character-name-generator" />;
}

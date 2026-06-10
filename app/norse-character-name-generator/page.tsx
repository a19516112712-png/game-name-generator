import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("norse-character-name-generator");

export default function Page() {
  return <LandingPage slug="norse-character-name-generator" />;
}

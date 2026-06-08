import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("infernal-faction-names");

export default function Page() {
  return <LandingPage slug="infernal-faction-names" />;
}

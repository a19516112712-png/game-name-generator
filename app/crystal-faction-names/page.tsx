import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("crystal-faction-names");

export default function Page() {
  return <LandingPage slug="crystal-faction-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("unique-faction-names");

export default function Page() {
  return <LandingPage slug="unique-faction-names" />;
}

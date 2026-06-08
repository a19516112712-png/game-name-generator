import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("ice-faction-names");

export default function Page() {
  return <LandingPage slug="ice-faction-names" />;
}

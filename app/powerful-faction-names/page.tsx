import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("powerful-faction-names");

export default function Page() {
  return <LandingPage slug="powerful-faction-names" />;
}

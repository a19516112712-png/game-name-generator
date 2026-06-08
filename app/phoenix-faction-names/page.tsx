import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("phoenix-faction-names");

export default function Page() {
  return <LandingPage slug="phoenix-faction-names" />;
}

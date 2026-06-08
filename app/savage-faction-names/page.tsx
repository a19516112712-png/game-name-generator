import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("savage-faction-names");

export default function Page() {
  return <LandingPage slug="savage-faction-names" />;
}

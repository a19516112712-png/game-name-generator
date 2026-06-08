import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("savage-guild-names");

export default function Page() {
  return <LandingPage slug="savage-guild-names" />;
}

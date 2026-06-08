import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("legendary-guild-names");

export default function Page() {
  return <LandingPage slug="legendary-guild-names" />;
}

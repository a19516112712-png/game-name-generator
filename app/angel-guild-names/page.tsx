import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("angel-guild-names");

export default function Page() {
  return <LandingPage slug="angel-guild-names" />;
}

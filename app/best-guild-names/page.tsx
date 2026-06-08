import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("best-guild-names");

export default function Page() {
  return <LandingPage slug="best-guild-names" />;
}

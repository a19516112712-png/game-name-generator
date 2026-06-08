import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cursed-guild-names");

export default function Page() {
  return <LandingPage slug="cursed-guild-names" />;
}

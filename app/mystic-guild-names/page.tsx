import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mystic-guild-names");

export default function Page() {
  return <LandingPage slug="mystic-guild-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("human-guild-names");

export default function Page() {
  return <LandingPage slug="human-guild-names" />;
}

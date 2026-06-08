import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("undead-faction-names");

export default function Page() {
  return <LandingPage slug="undead-faction-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("infernal-guild-names");

export default function Page() {
  return <LandingPage slug="infernal-guild-names" />;
}

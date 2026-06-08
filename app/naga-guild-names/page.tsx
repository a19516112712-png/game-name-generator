import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("naga-guild-names");

export default function Page() {
  return <LandingPage slug="naga-guild-names" />;
}

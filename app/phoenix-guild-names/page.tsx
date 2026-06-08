import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("phoenix-guild-names");

export default function Page() {
  return <LandingPage slug="phoenix-guild-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("nether-castle-names");

export default function Page() {
  return <LandingPage slug="nether-castle-names" />;
}

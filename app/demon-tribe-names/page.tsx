import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("demon-tribe-names");

export default function Page() {
  return <LandingPage slug="demon-tribe-names" />;
}

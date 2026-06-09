import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dread-tribe-names");

export default function Page() {
  return <LandingPage slug="dread-tribe-names" />;
}

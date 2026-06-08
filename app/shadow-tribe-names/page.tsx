import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("shadow-tribe-names");

export default function Page() {
  return <LandingPage slug="shadow-tribe-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("royal-kingdom-names");

export default function Page() {
  return <LandingPage slug="royal-kingdom-names" />;
}

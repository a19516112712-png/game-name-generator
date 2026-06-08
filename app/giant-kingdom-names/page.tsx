import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("giant-kingdom-names");

export default function Page() {
  return <LandingPage slug="giant-kingdom-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("risen-realm-names");

export default function Page() {
  return <LandingPage slug="risen-realm-names" />;
}

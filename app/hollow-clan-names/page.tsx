import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("hollow-clan-names");

export default function Page() {
  return <LandingPage slug="hollow-clan-names" />;
}

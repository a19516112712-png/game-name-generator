import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("angel-clan-names");

export default function Page() {
  return <LandingPage slug="angel-clan-names" />;
}

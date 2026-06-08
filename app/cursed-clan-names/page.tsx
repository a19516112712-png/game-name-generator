import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cursed-clan-names");

export default function Page() {
  return <LandingPage slug="cursed-clan-names" />;
}

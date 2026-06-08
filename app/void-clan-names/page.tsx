import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("void-clan-names");

export default function Page() {
  return <LandingPage slug="void-clan-names" />;
}

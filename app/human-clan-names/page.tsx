import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("human-clan-names");

export default function Page() {
  return <LandingPage slug="human-clan-names" />;
}

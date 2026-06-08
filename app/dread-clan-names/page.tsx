import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dread-clan-names");

export default function Page() {
  return <LandingPage slug="dread-clan-names" />;
}

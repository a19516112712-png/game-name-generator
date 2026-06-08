import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("ember-clan-names");

export default function Page() {
  return <LandingPage slug="ember-clan-names" />;
}

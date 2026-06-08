import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("ember-village-names");

export default function Page() {
  return <LandingPage slug="ember-village-names" />;
}

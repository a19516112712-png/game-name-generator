import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("orc-realm-names");

export default function Page() {
  return <LandingPage slug="orc-realm-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("angel-realm-names");

export default function Page() {
  return <LandingPage slug="angel-realm-names" />;
}

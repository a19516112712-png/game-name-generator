import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("naga-realm-names");

export default function Page() {
  return <LandingPage slug="naga-realm-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("fire-realm-names");

export default function Page() {
  return <LandingPage slug="fire-realm-names" />;
}

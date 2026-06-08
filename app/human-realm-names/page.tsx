import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("human-realm-names");

export default function Page() {
  return <LandingPage slug="human-realm-names" />;
}

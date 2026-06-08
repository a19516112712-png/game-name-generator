import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("storm-realm-names");

export default function Page() {
  return <LandingPage slug="storm-realm-names" />;
}

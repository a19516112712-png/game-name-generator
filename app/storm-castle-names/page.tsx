import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("storm-castle-names");

export default function Page() {
  return <LandingPage slug="storm-castle-names" />;
}

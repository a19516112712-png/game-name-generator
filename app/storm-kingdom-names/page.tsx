import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("storm-kingdom-names");

export default function Page() {
  return <LandingPage slug="storm-kingdom-names" />;
}

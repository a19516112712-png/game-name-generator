import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("storm-dynasty-names");

export default function Page() {
  return <LandingPage slug="storm-dynasty-names" />;
}

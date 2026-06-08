import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("orc-dynasty-names");

export default function Page() {
  return <LandingPage slug="orc-dynasty-names" />;
}

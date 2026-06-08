import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mythical-dynasty-names");

export default function Page() {
  return <LandingPage slug="mythical-dynasty-names" />;
}

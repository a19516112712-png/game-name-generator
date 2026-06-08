import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("best-dynasty-names");

export default function Page() {
  return <LandingPage slug="best-dynasty-names" />;
}

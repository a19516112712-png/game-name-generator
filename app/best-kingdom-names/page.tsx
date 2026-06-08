import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("best-kingdom-names");

export default function Page() {
  return <LandingPage slug="best-kingdom-names" />;
}

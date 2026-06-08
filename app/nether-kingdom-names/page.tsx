import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("nether-kingdom-names");

export default function Page() {
  return <LandingPage slug="nether-kingdom-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("arcane-kingdom-names");

export default function Page() {
  return <LandingPage slug="arcane-kingdom-names" />;
}

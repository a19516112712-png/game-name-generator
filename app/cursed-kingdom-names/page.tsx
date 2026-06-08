import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cursed-kingdom-names");

export default function Page() {
  return <LandingPage slug="cursed-kingdom-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("evil-tribe-names");

export default function Page() {
  return <LandingPage slug="evil-tribe-names" />;
}

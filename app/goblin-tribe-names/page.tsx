import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("goblin-tribe-names");

export default function Page() {
  return <LandingPage slug="goblin-tribe-names" />;
}

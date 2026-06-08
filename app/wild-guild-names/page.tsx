import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("wild-guild-names");

export default function Page() {
  return <LandingPage slug="wild-guild-names" />;
}

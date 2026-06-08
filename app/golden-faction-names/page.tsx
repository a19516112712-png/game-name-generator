import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("golden-faction-names");

export default function Page() {
  return <LandingPage slug="golden-faction-names" />;
}

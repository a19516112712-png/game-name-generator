import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("titan-faction-names");

export default function Page() {
  return <LandingPage slug="titan-faction-names" />;
}

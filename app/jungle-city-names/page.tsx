import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("jungle-city-names");

export default function Page() {
  return <LandingPage slug="jungle-city-names" />;
}

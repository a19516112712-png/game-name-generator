import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("aztec-city-names");

export default function Page() {
  return <LandingPage slug="aztec-city-names" />;
}

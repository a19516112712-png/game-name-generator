import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("medieval-city-names");

export default function Page() {
  return <LandingPage slug="medieval-city-names" />;
}

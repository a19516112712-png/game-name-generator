import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("norse-city-names");

export default function Page() {
  return <LandingPage slug="norse-city-names" />;
}

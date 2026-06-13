import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("port-city-names");

export default function Page() {
  return <LandingPage slug="port-city-names" />;
}

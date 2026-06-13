import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dwarven-mountain-city-names");

export default function Page() {
  return <LandingPage slug="dwarven-mountain-city-names" />;
}

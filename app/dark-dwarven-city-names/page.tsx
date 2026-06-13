import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dark-dwarven-city-names");

export default function Page() {
  return <LandingPage slug="dark-dwarven-city-names" />;
}

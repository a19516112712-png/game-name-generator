import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dungeons-and-dragons-city-names");

export default function Page() {
  return <LandingPage slug="dungeons-and-dragons-city-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mystical-legion-names");

export default function Page() {
  return <LandingPage slug="mystical-legion-names" />;
}

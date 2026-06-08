import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("royal-alliance-names");

export default function Page() {
  return <LandingPage slug="royal-alliance-names" />;
}

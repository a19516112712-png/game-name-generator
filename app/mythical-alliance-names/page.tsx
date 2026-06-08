import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mythical-alliance-names");

export default function Page() {
  return <LandingPage slug="mythical-alliance-names" />;
}

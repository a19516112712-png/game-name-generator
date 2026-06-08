import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("blood-alliance-names");

export default function Page() {
  return <LandingPage slug="blood-alliance-names" />;
}

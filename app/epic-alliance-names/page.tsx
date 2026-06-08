import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("epic-alliance-names");

export default function Page() {
  return <LandingPage slug="epic-alliance-names" />;
}

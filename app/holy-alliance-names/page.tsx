import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("holy-alliance-names");

export default function Page() {
  return <LandingPage slug="holy-alliance-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("arcane-alliance-names");

export default function Page() {
  return <LandingPage slug="arcane-alliance-names" />;
}

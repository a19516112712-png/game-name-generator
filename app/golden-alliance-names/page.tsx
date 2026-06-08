import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("golden-alliance-names");

export default function Page() {
  return <LandingPage slug="golden-alliance-names" />;
}

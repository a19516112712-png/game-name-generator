import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("frozen-alliance-names");

export default function Page() {
  return <LandingPage slug="frozen-alliance-names" />;
}

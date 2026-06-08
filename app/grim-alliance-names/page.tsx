import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("grim-alliance-names");

export default function Page() {
  return <LandingPage slug="grim-alliance-names" />;
}

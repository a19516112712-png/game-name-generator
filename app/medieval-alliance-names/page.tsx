import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("medieval-alliance-names");

export default function Page() {
  return <LandingPage slug="medieval-alliance-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("royal-empire-names");

export default function Page() {
  return <LandingPage slug="royal-empire-names" />;
}

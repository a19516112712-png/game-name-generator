import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("crystal-dynasty-names");

export default function Page() {
  return <LandingPage slug="crystal-dynasty-names" />;
}

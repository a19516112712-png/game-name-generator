import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("unique-dynasty-names");

export default function Page() {
  return <LandingPage slug="unique-dynasty-names" />;
}

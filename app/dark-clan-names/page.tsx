import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dark-clan-names");

export default function Page() {
  return <LandingPage slug="dark-clan-names" />;
}

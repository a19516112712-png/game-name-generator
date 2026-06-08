import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("silent-kingdom-names");

export default function Page() {
  return <LandingPage slug="silent-kingdom-names" />;
}

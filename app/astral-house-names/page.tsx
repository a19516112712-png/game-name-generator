import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("astral-house-names");

export default function Page() {
  return <LandingPage slug="astral-house-names" />;
}

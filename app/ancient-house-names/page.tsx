import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("ancient-house-names");

export default function Page() {
  return <LandingPage slug="ancient-house-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("celestial-empire-names");

export default function Page() {
  return <LandingPage slug="celestial-empire-names" />;
}

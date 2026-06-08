import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("unique-empire-names");

export default function Page() {
  return <LandingPage slug="unique-empire-names" />;
}

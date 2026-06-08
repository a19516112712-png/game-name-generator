import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("angel-empire-names");

export default function Page() {
  return <LandingPage slug="angel-empire-names" />;
}

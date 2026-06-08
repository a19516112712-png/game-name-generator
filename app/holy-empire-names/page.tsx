import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("holy-empire-names");

export default function Page() {
  return <LandingPage slug="holy-empire-names" />;
}

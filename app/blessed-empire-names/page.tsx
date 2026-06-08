import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("blessed-empire-names");

export default function Page() {
  return <LandingPage slug="blessed-empire-names" />;
}

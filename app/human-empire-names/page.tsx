import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("human-empire-names");

export default function Page() {
  return <LandingPage slug="human-empire-names" />;
}

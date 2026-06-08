import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("ice-empire-names");

export default function Page() {
  return <LandingPage slug="ice-empire-names" />;
}

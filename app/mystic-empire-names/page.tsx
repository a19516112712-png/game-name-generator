import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mystic-empire-names");

export default function Page() {
  return <LandingPage slug="mystic-empire-names" />;
}

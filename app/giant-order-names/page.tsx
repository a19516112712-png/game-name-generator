import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("giant-order-names");

export default function Page() {
  return <LandingPage slug="giant-order-names" />;
}

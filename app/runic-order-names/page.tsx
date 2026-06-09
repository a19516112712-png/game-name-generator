import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("runic-order-names");

export default function Page() {
  return <LandingPage slug="runic-order-names" />;
}

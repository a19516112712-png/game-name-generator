import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("orc-order-names");

export default function Page() {
  return <LandingPage slug="orc-order-names" />;
}

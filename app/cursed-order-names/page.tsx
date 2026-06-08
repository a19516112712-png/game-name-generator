import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cursed-order-names");

export default function Page() {
  return <LandingPage slug="cursed-order-names" />;
}

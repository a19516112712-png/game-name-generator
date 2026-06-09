import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("fallen-order-names");

export default function Page() {
  return <LandingPage slug="fallen-order-names" />;
}

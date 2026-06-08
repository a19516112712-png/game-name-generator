import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("fire-order-names");

export default function Page() {
  return <LandingPage slug="fire-order-names" />;
}

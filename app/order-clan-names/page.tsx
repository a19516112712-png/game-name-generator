import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("order-clan-names");

export default function Page() {
  return <LandingPage slug="order-clan-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("order-faction-names");

export default function Page() {
  return <LandingPage slug="order-faction-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("void-order-names");

export default function Page() {
  return <LandingPage slug="void-order-names" />;
}

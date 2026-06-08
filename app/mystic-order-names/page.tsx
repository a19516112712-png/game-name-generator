import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("mystic-order-names");

export default function Page() {
  return <LandingPage slug="mystic-order-names" />;
}

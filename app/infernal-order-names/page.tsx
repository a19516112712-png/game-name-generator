import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("infernal-order-names");

export default function Page() {
  return <LandingPage slug="infernal-order-names" />;
}

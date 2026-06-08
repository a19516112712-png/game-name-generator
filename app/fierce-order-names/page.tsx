import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("fierce-order-names");

export default function Page() {
  return <LandingPage slug="fierce-order-names" />;
}

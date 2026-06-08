import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("titan-order-names");

export default function Page() {
  return <LandingPage slug="titan-order-names" />;
}

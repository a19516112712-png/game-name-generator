import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("savage-order-names");

export default function Page() {
  return <LandingPage slug="savage-order-names" />;
}

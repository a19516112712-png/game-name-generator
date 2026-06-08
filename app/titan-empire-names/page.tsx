import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("titan-empire-names");

export default function Page() {
  return <LandingPage slug="titan-empire-names" />;
}

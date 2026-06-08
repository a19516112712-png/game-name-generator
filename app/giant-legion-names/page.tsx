import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("giant-legion-names");

export default function Page() {
  return <LandingPage slug="giant-legion-names" />;
}

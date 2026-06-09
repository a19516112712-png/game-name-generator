import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("hallow-legion-names");

export default function Page() {
  return <LandingPage slug="hallow-legion-names" />;
}

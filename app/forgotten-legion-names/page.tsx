import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("forgotten-legion-names");

export default function Page() {
  return <LandingPage slug="forgotten-legion-names" />;
}

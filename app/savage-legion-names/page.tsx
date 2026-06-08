import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("savage-legion-names");

export default function Page() {
  return <LandingPage slug="savage-legion-names" />;
}

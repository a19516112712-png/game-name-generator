import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("powerful-legion-names");

export default function Page() {
  return <LandingPage slug="powerful-legion-names" />;
}

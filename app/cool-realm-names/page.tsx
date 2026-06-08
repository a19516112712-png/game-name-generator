import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cool-realm-names");

export default function Page() {
  return <LandingPage slug="cool-realm-names" />;
}

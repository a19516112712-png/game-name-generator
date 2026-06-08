import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cool-dynasty-names");

export default function Page() {
  return <LandingPage slug="cool-dynasty-names" />;
}

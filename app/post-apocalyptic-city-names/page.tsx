import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("post-apocalyptic-city-names");

export default function Page() {
  return <LandingPage slug="post-apocalyptic-city-names" />;
}

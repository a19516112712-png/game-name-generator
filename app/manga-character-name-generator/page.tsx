import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("manga-character-name-generator");

export default function Page() {
  return <LandingPage slug="manga-character-name-generator" />;
}

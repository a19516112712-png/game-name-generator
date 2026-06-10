import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("post-apocalyptic-character-name-generator");

export default function Page() {
  return <LandingPage slug="post-apocalyptic-character-name-generator" />;
}

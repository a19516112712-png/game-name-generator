import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("male-vampire-character-name-generator");

export default function Page() {
  return <LandingPage slug="male-vampire-character-name-generator" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("werewolf-character-name-generator");

export default function Page() {
  return <LandingPage slug="werewolf-character-name-generator" />;
}

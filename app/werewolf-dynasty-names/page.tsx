import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("werewolf-dynasty-names");

export default function Page() {
  return <LandingPage slug="werewolf-dynasty-names" />;
}

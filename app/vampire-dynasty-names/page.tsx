import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("vampire-dynasty-names");

export default function Page() {
  return <LandingPage slug="vampire-dynasty-names" />;
}

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("vampire-empire-names");

export default function Page() {
  return <LandingPage slug="vampire-empire-names" />;
}

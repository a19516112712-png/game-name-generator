import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("coastal-pirate-names");
export default function Page() { return <LandingPage slug="coastal-pirate-names" />; }

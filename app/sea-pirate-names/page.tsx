import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("sea-pirate-names");
export default function Page() { return <LandingPage slug="sea-pirate-names" />; }

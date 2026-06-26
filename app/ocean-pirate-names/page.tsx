import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("ocean-pirate-names");
export default function Page() { return <LandingPage slug="ocean-pirate-names" />; }

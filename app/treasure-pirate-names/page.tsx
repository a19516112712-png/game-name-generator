import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("treasure-pirate-names");
export default function Page() { return <LandingPage slug="treasure-pirate-names" />; }

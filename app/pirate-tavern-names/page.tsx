import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("pirate-tavern-names");
export default function Page() { return <LandingPage slug="pirate-tavern-names" />; }

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("dragon-pirate-names");
export default function Page() { return <LandingPage slug="dragon-pirate-names" />; }

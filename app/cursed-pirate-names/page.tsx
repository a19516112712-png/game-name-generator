import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("cursed-pirate-names");
export default function Page() { return <LandingPage slug="cursed-pirate-names" />; }

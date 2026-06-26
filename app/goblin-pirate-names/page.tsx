import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("goblin-pirate-names");
export default function Page() { return <LandingPage slug="goblin-pirate-names" />; }

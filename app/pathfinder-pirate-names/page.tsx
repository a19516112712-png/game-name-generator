import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("pathfinder-pirate-names");
export default function Page() { return <LandingPage slug="pathfinder-pirate-names" />; }

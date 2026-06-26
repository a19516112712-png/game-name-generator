import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("plunder-pirate-names");
export default function Page() { return <LandingPage slug="plunder-pirate-names" />; }

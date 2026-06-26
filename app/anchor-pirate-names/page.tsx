import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("anchor-pirate-names");
export default function Page() { return <LandingPage slug="anchor-pirate-names" />; }

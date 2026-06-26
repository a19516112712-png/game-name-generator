import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("captain-pirate-names");
export default function Page() { return <LandingPage slug="captain-pirate-names" />; }

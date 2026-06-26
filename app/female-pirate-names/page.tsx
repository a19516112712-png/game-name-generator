import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("female-pirate-names");
export default function Page() { return <LandingPage slug="female-pirate-names" />; }

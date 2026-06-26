import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("crimson-pirate-names");
export default function Page() { return <LandingPage slug="crimson-pirate-names" />; }

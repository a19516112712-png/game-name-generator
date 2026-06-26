import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("shadow-pirate-names");
export default function Page() { return <LandingPage slug="shadow-pirate-names" />; }

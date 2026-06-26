import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("privateer-pirate-names");
export default function Page() { return <LandingPage slug="privateer-pirate-names" />; }

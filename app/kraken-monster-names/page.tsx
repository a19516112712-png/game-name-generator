import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("kraken-monster-names");
export default function Page() { return <LandingPage slug="kraken-monster-names" />; }

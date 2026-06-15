import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("sea-monster-names");
export default function Page() { return <LandingPage slug="sea-monster-names" />; }

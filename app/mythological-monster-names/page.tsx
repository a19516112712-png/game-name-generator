import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("mythological-monster-names");
export default function Page() { return <LandingPage slug="mythological-monster-names" />; }

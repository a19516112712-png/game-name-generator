import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("minion-monster-names");
export default function Page() { return <LandingPage slug="minion-monster-names" />; }

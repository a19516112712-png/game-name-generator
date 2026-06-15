import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("lightning-monster-names");
export default function Page() { return <LandingPage slug="lightning-monster-names" />; }

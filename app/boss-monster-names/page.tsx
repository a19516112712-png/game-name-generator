import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("boss-monster-names");
export default function Page() { return <LandingPage slug="boss-monster-names" />; }

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("poison-monster-names");
export default function Page() { return <LandingPage slug="poison-monster-names" />; }

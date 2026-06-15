import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("cave-monster-names");
export default function Page() { return <LandingPage slug="cave-monster-names" />; }

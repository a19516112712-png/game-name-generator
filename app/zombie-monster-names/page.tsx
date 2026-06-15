import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("zombie-monster-names");
export default function Page() { return <LandingPage slug="zombie-monster-names" />; }

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("fantasy-monster-names");
export default function Page() { return <LandingPage slug="fantasy-monster-names" />; }

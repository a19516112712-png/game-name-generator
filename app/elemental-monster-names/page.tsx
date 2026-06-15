import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("elemental-monster-names");
export default function Page() { return <LandingPage slug="elemental-monster-names" />; }

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("griffin-monster-names");
export default function Page() { return <LandingPage slug="griffin-monster-names" />; }

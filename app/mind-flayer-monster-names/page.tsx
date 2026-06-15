import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("mind-flayer-monster-names");
export default function Page() { return <LandingPage slug="mind-flayer-monster-names" />; }

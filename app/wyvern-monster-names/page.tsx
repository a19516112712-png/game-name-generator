import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("wyvern-monster-names");
export default function Page() { return <LandingPage slug="wyvern-monster-names" />; }

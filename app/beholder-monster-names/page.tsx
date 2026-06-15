import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("beholder-monster-names");
export default function Page() { return <LandingPage slug="beholder-monster-names" />; }

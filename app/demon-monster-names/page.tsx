import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("demon-monster-names");
export default function Page() { return <LandingPage slug="demon-monster-names" />; }

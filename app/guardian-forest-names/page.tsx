import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("guardian-forest-names");
export default function Page() { return <LandingPage slug="guardian-forest-names" />; }

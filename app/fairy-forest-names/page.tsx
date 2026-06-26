import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("fairy-forest-names");
export default function Page() { return <LandingPage slug="fairy-forest-names" />; }

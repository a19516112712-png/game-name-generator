import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("emerald-forest-names");
export default function Page() { return <LandingPage slug="emerald-forest-names" />; }

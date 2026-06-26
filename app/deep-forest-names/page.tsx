import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("deep-forest-names");
export default function Page() { return <LandingPage slug="deep-forest-names" />; }

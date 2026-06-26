import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("twilight-forest-names");
export default function Page() { return <LandingPage slug="twilight-forest-names" />; }

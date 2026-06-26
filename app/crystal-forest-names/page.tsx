import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("crystal-forest-names");
export default function Page() { return <LandingPage slug="crystal-forest-names" />; }

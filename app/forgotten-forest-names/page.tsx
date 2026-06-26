import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("forgotten-forest-names");
export default function Page() { return <LandingPage slug="forgotten-forest-names" />; }

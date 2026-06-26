import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("runic-forest-names");
export default function Page() { return <LandingPage slug="runic-forest-names" />; }

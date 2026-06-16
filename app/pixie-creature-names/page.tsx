import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("pixie-creature-names");
export default function Page() { return <LandingPage slug="pixie-creature-names" />; }

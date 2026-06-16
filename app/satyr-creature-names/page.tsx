import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("satyr-creature-names");
export default function Page() { return <LandingPage slug="satyr-creature-names" />; }

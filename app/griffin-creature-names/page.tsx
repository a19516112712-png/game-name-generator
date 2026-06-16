import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("griffin-creature-names");
export default function Page() { return <LandingPage slug="griffin-creature-names" />; }

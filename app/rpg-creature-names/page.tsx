import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("rpg-creature-names");
export default function Page() { return <LandingPage slug="rpg-creature-names" />; }

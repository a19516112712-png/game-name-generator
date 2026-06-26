import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("rpg-wizard-names");
export default function Page() { return <LandingPage slug="rpg-wizard-names" />; }

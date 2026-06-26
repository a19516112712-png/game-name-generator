import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("rpg-tavern-names");
export default function Page() { return <LandingPage slug="rpg-tavern-names" />; }

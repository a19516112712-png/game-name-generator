import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("kingdom-npc-names");

export default function Page() { return <LandingPage slug="kingdom-npc-names" />; }

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("barbarian-npc-names");

export default function Page() { return <LandingPage slug="barbarian-npc-names" />; }

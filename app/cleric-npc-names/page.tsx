import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("cleric-npc-names");

export default function Page() { return <LandingPage slug="cleric-npc-names" />; }

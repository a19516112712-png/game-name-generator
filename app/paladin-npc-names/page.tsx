import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("paladin-npc-names");

export default function Page() { return <LandingPage slug="paladin-npc-names" />; }

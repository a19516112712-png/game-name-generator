import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dragonborn-npc-names");

export default function Page() { return <LandingPage slug="dragonborn-npc-names" />; }

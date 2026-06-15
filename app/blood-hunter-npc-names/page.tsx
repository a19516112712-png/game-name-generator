import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("blood-hunter-npc-names");

export default function Page() { return <LandingPage slug="blood-hunter-npc-names" />; }

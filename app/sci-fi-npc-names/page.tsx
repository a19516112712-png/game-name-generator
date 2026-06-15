import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("sci-fi-npc-names");

export default function Page() { return <LandingPage slug="sci-fi-npc-names" />; }

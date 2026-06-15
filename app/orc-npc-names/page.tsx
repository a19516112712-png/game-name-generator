import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("orc-npc-names");

export default function Page() { return <LandingPage slug="orc-npc-names" />; }

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("bard-npc-names");

export default function Page() { return <LandingPage slug="bard-npc-names" />; }

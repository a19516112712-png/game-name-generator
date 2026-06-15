import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("village-npc-names");

export default function Page() { return <LandingPage slug="village-npc-names" />; }

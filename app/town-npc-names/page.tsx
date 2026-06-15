import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("town-npc-names");

export default function Page() { return <LandingPage slug="town-npc-names" />; }

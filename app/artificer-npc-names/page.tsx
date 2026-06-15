import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("artificer-npc-names");

export default function Page() { return <LandingPage slug="artificer-npc-names" />; }

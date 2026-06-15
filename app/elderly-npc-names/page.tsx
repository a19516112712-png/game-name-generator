import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("elderly-npc-names");

export default function Page() { return <LandingPage slug="elderly-npc-names" />; }

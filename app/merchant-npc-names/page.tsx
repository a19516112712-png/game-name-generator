import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("merchant-npc-names");

export default function Page() { return <LandingPage slug="merchant-npc-names" />; }

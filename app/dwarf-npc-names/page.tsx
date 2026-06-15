import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dwarf-npc-names");

export default function Page() { return <LandingPage slug="dwarf-npc-names" />; }

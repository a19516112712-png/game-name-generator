import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("gnome-npc-names");

export default function Page() { return <LandingPage slug="gnome-npc-names" />; }

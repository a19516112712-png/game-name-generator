import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("ranger-npc-names");

export default function Page() { return <LandingPage slug="ranger-npc-names" />; }

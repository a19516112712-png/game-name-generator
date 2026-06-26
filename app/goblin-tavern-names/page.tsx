import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("goblin-tavern-names");
export default function Page() { return <LandingPage slug="goblin-tavern-names" />; }

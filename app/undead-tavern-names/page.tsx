import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("undead-tavern-names");
export default function Page() { return <LandingPage slug="undead-tavern-names" />; }

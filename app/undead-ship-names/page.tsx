import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("undead-ship-names");
export default function Page() { return <LandingPage slug="undead-ship-names" />; }

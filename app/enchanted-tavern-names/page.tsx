import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("enchanted-tavern-names");
export default function Page() { return <LandingPage slug="enchanted-tavern-names" />; }

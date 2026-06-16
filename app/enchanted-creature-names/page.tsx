import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("enchanted-creature-names");
export default function Page() { return <LandingPage slug="enchanted-creature-names" />; }

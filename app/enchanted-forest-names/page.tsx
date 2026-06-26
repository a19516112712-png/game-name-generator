import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("enchanted-forest-names");
export default function Page() { return <LandingPage slug="enchanted-forest-names" />; }

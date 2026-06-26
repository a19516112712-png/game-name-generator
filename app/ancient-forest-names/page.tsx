import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("ancient-forest-names");
export default function Page() { return <LandingPage slug="ancient-forest-names" />; }

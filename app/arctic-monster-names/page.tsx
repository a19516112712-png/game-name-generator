import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("arctic-monster-names");
export default function Page() { return <LandingPage slug="arctic-monster-names" />; }

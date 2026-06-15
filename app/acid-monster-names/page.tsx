import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("acid-monster-names");
export default function Page() { return <LandingPage slug="acid-monster-names" />; }

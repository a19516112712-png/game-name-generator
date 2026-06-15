import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("lich-monster-names");
export default function Page() { return <LandingPage slug="lich-monster-names" />; }

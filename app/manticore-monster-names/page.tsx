import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("manticore-monster-names");
export default function Page() { return <LandingPage slug="manticore-monster-names" />; }

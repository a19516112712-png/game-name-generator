import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("ogre-monster-names");
export default function Page() { return <LandingPage slug="ogre-monster-names" />; }

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("golden-forest-names");
export default function Page() { return <LandingPage slug="golden-forest-names" />; }

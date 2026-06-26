import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("iron-knight-names");
export default function Page() { return <LandingPage slug="iron-knight-names" />; }

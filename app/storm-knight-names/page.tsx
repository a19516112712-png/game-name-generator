import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("storm-knight-names");
export default function Page() { return <LandingPage slug="storm-knight-names" />; }

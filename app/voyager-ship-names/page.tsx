import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("voyager-ship-names");
export default function Page() { return <LandingPage slug="voyager-ship-names" />; }

import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("haunted-tavern-names");
export default function Page() { return <LandingPage slug="haunted-tavern-names" />; }

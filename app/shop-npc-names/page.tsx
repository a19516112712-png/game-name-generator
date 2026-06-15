import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("shop-npc-names");

export default function Page() { return <LandingPage slug="shop-npc-names" />; }

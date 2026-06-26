import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("eternal-forest-names");
export default function Page() { return <LandingPage slug="eternal-forest-names" />; }

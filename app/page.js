"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { CtaSection } from "@/components/CtaSection";
import { FixedSocialFooter } from "@/components/FixedSocialFooter";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-1 flex-col overflow-x-hidden bg-black pb-18 sm:pb-20">
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
      <FixedSocialFooter />
    </main>
  );
}

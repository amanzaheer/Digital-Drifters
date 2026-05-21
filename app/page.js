"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AiIntegrationSection } from "@/components/AiIntegrationSection";
import { SocialMediaSection } from "@/components/SocialMediaSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CtaSection } from "@/components/CtaSection";
import { FixedSocialFooter } from "@/components/FixedSocialFooter";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-1 flex-col overflow-x-hidden bg-black pb-18 sm:pb-20">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <AiIntegrationSection />
      <SocialMediaSection />
      <AboutSection />
      <TeamSection />
      <ReviewsSection />
      <CtaSection />
      <FixedSocialFooter />
    </main>
  );
}

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
import { Footer } from "@/components/Footer";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="flex min-h-dvh flex-1 flex-col overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <AiIntegrationSection />
      <SocialMediaSection />
      <AboutSection />
      <TeamSection />
      <Projects/>
      <ReviewsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

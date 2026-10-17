import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { SearchVisibilitySection } from "@/components/SearchVisibilitySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { MarketplaceSection } from "@/components/MarketplaceSection";
import { AiIntegrationSection } from "@/components/AiIntegrationSection";
import { SocialMediaSection } from "@/components/SocialMediaSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { HOME_FAQS } from "@/lib/services";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-1 flex-col overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <ServicesSection />
      <SearchVisibilitySection />
      <ProjectsSection />
      <MarketplaceSection />
      <AiIntegrationSection />
      <SocialMediaSection />
      <AboutSection />
      <ReviewsSection />
      <FaqSection faqs={HOME_FAQS} />
      <CtaSection />
      <Footer />
    </main>
  );
}

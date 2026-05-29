import HeroSection from "@/components/HeroSection";
import ProofOfWorkSection from "@/components/ProofOfWorkSection";
import AboutMeSection from "@/components/AboutMeSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ResearchSection from "@/components/ResearchSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="bg-background text-foreground min-h-screen">
    <main className="relative z-10 selection:bg-white selection:text-black">
      <HeroSection />
      <ProofOfWorkSection />
      <AboutMeSection />
      <WhatIDoSection />
      <PrinciplesSection />
      <AchievementsSection />
      <ResearchSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>

    <footer className="relative z-10 py-12 flex justify-center items-center text-[11px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
      <span>© 2026 Sabbir Ahmed.</span>
    </footer>
  </div>
);

export default Index;

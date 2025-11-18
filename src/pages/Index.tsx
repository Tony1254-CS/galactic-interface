import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import AcademicSection from "@/components/AcademicSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative bg-background text-foreground">
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AchievementsSection />
        <AcademicSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 bg-card/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground font-mono text-sm">
              © 2025 SABBIR AHMED. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-2 text-primary/70 font-mono text-xs">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              SYSTEM OPERATIONAL
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { Footer } from "@/components/Footer";
// Removed: import { AboutSection } from "@/components/sections/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <ScrollAnimations />
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        {/* Removed: <AboutSection /> */}
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;

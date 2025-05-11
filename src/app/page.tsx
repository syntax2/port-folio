import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ResumeSection } from '@/components/sections/resume-section';
import { ContactSection } from '@/components/sections/contact-section';
import { AIBioGeneratorSection } from '@/components/sections/ai-bio-generator-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Sections will individually be client components if they use client-side hooks/animations */}
        <HeroSection />
        <ProjectsSection />
        <ResumeSection />
        <AIBioGeneratorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

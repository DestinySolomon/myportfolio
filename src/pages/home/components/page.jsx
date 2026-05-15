import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ThothTechSection from "./components/ThothTechSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import NicheSection from "./components/NicheSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="relative w-full bg-editorial-bg text-editorial-text overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ThothTechSection />
      <TechStackSection />
      <ProjectsSection />
      <CertificationsSection />
      <NicheSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
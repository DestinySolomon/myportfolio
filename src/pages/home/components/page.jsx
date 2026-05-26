import { ErrorBoundary } from "../../../components/ErrorBoundary";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ThothTechSection from "./ThothTechSection";
import TechStackSection from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";
import CertificationsSection from "./CertificationsSection";
import NicheSection from "./NicheSection";
import TestimonialsSection from "./TestimonialsSection";
import ProcessSection from "./ProcessSection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <main className="relative w-full bg-editorial-bg text-editorial-text overflow-x-hidden">
      <ErrorBoundary name="Navigation">
        <Navigation />
      </ErrorBoundary>
      <ErrorBoundary name="HeroSection">
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary name="AboutSection">
        <AboutSection />
      </ErrorBoundary>
      <ErrorBoundary name="ThothTechSection">
        <ThothTechSection />
      </ErrorBoundary>
      <ErrorBoundary name="TechStackSection">
        <TechStackSection />
      </ErrorBoundary>
      <ErrorBoundary name="ProjectsSection">
        <ProjectsSection />
      </ErrorBoundary>
      <ErrorBoundary name="CertificationsSection">
        <CertificationsSection />
      </ErrorBoundary>
      <ErrorBoundary name="NicheSection">
        <NicheSection />
      </ErrorBoundary>
      <ErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </ErrorBoundary>
      <ErrorBoundary name="ProcessSection">
        <ProcessSection />
      </ErrorBoundary>
      <ErrorBoundary name="ContactSection">
        <ContactSection />
      </ErrorBoundary>
    </main>
  );
}
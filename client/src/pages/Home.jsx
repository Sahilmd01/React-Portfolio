import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import React, { Suspense } from 'react';

// Lazy loaded components
const SkillsSection = React.lazy(() => import("../components/SkillsSection").then(module => ({ default: module.SkillsSection })));
const ProjectsSection = React.lazy(() => import("../components/ProjectsSection").then(module => ({ default: module.ProjectsSection })));
const GithubStatsSection = React.lazy(() => import("../components/GithubStatsSection"));
const ContactSection = React.lazy(() => import("../components/ContactSection").then(module => ({ default: module.ContactSection })));
const Footer = React.lazy(() => import("../components/Footer").then(module => ({ default: module.Footer })));
const TestimonialSection = React.lazy(() => import("../components/Testimonial").then(module => ({ default: module.TestimonialSection })));
const TimelineSection = React.lazy(() => import("../components/TimelineSection"));


const Loader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <Suspense fallback={<Loader />}>
          <SkillsSection />
          <TimelineSection />
          <ProjectsSection />
          <GithubStatsSection />
          <TestimonialSection />
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

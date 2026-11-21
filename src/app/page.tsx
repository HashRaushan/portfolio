"use client";

import { useEffect } from "react";
import { usePortfolioStore } from "@/lib/store";
import Preloader from "@/components/portfolio/preloader";
import CustomCursor from "@/components/portfolio/custom-cursor";
import Navigation from "@/components/portfolio/navigation";
import Hero from "@/components/portfolio/hero";
import About from "@/components/portfolio/about";
import Timeline from "@/components/portfolio/timeline";
import CaseStudy from "@/components/portfolio/case-study";
import Experience from "@/components/portfolio/experience";
import Skills from "@/components/portfolio/skills";
import Certificates from "@/components/portfolio/certificates";
import ResumeSection from "@/components/portfolio/resume-section";
import Contact from "@/components/portfolio/contact";
import Footer from "@/components/portfolio/footer";
import ResumeMode from "@/components/portfolio/resume-mode";

export default function Home() {
  const mode = usePortfolioStore((s) => s.mode);
  const hydrate = usePortfolioStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    document.body.style.overflow = mode === "resume" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mode]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Preloader />
      <CustomCursor />
      <Navigation />

      <main className="flex-1">
        <Hero />
        <About />
        <Timeline />
        <CaseStudy />
        <Experience />
        <Skills />
        <Certificates />
        <ResumeSection />
        <Contact />
      </main>

      <Footer />

      {mode === "resume" && <ResumeMode />}
    </div>
  );
}

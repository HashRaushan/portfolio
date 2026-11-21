"use client";

import { Download, ExternalLink, FileText } from "lucide-react";
import { site } from "@/content/portfolio";
import { Reveal, SectionHeading, MagneticButton } from "./ui-bits";
import { usePortfolioStore } from "@/lib/store";

export default function ResumeSection() {
  const setMode = usePortfolioStore((s) => s.setMode);

  return (
    <section id="resume" className="relative py-24 md:py-36" aria-label="Resume">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker="07 — The Resume"
          title="Everything on One Page"
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <Reveal className="lg:col-span-7">
            <div className="border border-gold/25 rounded-lg overflow-hidden bg-card/60">
              <div className="flex items-center justify-between px-5 py-3 border-b border-gold/15 bg-background/60">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Resume preview — Google Drive
                </span>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-soft transition-colors"
                  aria-label="Open resume in Google Drive"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <iframe
                src={site.resumeEmbedUrl}
                title="Raushan Kumar Pathak — Resume preview"
                className="w-full h-[520px] md:h-[640px] bg-background/40"
                loading="lazy"
                allow="autoplay"
              />
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">
              If the preview does not load, use the open/download buttons — the
              document lives on Google Drive.
            </p>
          </Reveal>

          <div className="lg:col-span-5 space-y-5">
            <Reveal delay={0.08}>
              <div className="border border-gold/20 rounded-lg bg-card/50 p-7">
                <h3 className="font-display text-2xl font-light mb-3">
                  For Recruiters
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Open the full document, download it, or switch to the clean
                  resume view built into this site — a scannable, traditional
                  format with all the essentials.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton href={site.resumeUrl} external className="w-full justify-center">
                    <Download className="w-4 h-4" />
                    Open / Download Resume
                  </MagneticButton>
                  <MagneticButton
                    onClick={() => setMode("resume")}
                    variant="outline"
                    className="w-full justify-center"
                  >
                    <FileText className="w-4 h-4" />
                    Switch to Resume Mode
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="border border-gold/15 rounded-lg bg-card/40 p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4">
                  Prefer talking?
                </p>
                <div className="space-y-3 text-sm">
                  <a
                    href={`mailto:${site.email}`}
                    className="block text-foreground/80 hover:text-gold transition-colors break-all"
                  >
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="block text-foreground/80 hover:text-gold transition-colors"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

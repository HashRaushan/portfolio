"use client";

import { Building2, MapPin, Briefcase, Wrench, Quote } from "lucide-react";
import { experience } from "@/content/portfolio";
import { Reveal, SectionHeading } from "./ui-bits";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-36 bg-secondary/30"
      aria-label="Professional experience"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker={experience.chapterLabel}
          title={experience.title}
        />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Role & responsibilities */}
          <Reveal className="lg:col-span-7">
            <article className="relative border border-gold/25 rounded-lg bg-card/60 p-7 md:p-10 overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0">
                    <Building2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-light leading-tight">
                      {experience.org}
                    </h3>
                    <p className="text-gold mt-1 font-medium">
                      {experience.role}
                    </p>
                    <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {experience.context}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-gold/40 text-gold bg-gold/5">
                  <Briefcase className="w-3 h-3" />
                  {experience.period}
                </span>
              </div>

              <p className="text-sm md:text-[15px] leading-relaxed text-foreground/70 mb-7">
                {experience.summary}
              </p>

              <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">
                Responsibilities
              </h4>
              <ul className="space-y-4">
                {experience.responsibilities.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <p className="text-sm md:text-[15px] leading-relaxed text-foreground/75">
                      {pt}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Technologies & takeaway */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="flex flex-col gap-6 h-full">
              <div className="border border-gold/15 rounded-lg p-7 md:p-9 bg-card/40">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold mb-6">
                  <Wrench className="w-4 h-4" />
                  Technologies &amp; Systems
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {experience.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3.5 py-2 rounded-full bg-gold/10 text-foreground/80 border border-gold/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                  Hands-on operational toolset from live infrastructure
                  monitoring at MEIL.
                </p>
              </div>

              <div className="relative border border-gold/25 rounded-lg p-7 md:p-9 bg-card/60 flex-1">
                <Quote className="w-5 h-5 text-gold/60 mb-4" />
                <p className="font-display text-lg md:text-xl font-light leading-snug text-foreground/85">
                  {experience.takeaway}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  What the role built
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

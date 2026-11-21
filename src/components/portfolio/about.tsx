"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Briefcase, TrendingUp, Sparkles } from "lucide-react";
import { about } from "@/content/portfolio";
import { Reveal, SectionHeading } from "./ui-bits";

const stages = [
  {
    icon: Code2,
    label: "Computer Science",
    sub: "Diploma · 2023",
    note: "How systems are built",
  },
  {
    icon: Briefcase,
    label: "Business Administration",
    sub: "BBA · 2026",
    note: "How organisations run",
  },
  {
    icon: TrendingUp,
    label: "Marketing & Operations",
    sub: "MBA · 2028",
    note: "How customers think & businesses grow",
  },
];

export default function About() {
  const [photoState, setPhotoState] = useState<"ok" | "pending">("pending");

  useEffect(() => {
    const probe = new window.Image();
    probe.onload = () => setPhotoState("ok");
    probe.src = about.photo.src;
  }, []);

  return (
    <section id="about" className="relative py-24 md:py-36" aria-label="About">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading kicker={about.chapterLabel} title={about.title} />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.05}>
              {/* Full-length photo — frame ratio matches the source image so nothing is cropped */}
              <div className="relative w-60 md:w-72 aspect-[3/4] rounded-lg border border-gold/25 bg-card/60 overflow-hidden">
                {photoState === "ok" ? (
                  <Image
                    src={about.photo.src}
                    alt={about.photo.alt}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <span className="font-display text-6xl leading-none text-gold/60">
                      R
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Photo coming soon
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl">
                  {p}
                </p>
              </Reveal>
            ))}

            {/* Personal statement */}
            <Reveal delay={0.2}>
              <figure className="relative mt-8 border border-gold/25 rounded-lg p-7 md:p-9 bg-card/60">
                <span className="absolute -top-3 left-6 bg-background px-3 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                  Positioning Statement
                </span>
                <blockquote className="font-display text-xl md:text-2xl font-light leading-snug text-foreground/90">
                  &ldquo;{about.statement}&rdquo;
                </blockquote>
              </figure>
            </Reveal>
          </div>

          {/* Currently learning + path */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal delay={0.1}>
              <div className="border border-gold/15 rounded-lg p-6 bg-card/40">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5">
                  <Sparkles className="w-4 h-4" /> Currently Learning
                </h3>
                <ul className="space-y-3">
                  {about.currentlyLearning.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-foreground/75"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* The transition */}
            <Reveal delay={0.18}>
              <div className="space-y-0">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                  The Transition
                </p>
                {stages.map((s, i) => (
                  <div key={s.label}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-4 border border-gold/15 rounded-lg p-4 bg-card/40"
                    >
                      <span className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0">
                        <s.icon className="w-4.5 h-4.5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-foreground">
                          {s.label}
                        </div>
                        <div className="font-mono text-[11px] text-gold/80">
                          {s.sub}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {s.note}
                        </div>
                      </div>
                    </motion.div>
                    {i < stages.length - 1 && (
                      <div className="ml-9 my-1.5 w-px h-4 bg-gold/30" />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

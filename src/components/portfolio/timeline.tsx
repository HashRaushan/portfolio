"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Building2, Clock3 } from "lucide-react";
import { timeline } from "@/content/portfolio";
import { Reveal, SectionHeading } from "./ui-bits";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section
      id="journey"
      className="relative py-24 md:py-36 bg-secondary/30"
      aria-label="Career and education timeline"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker="02 — The Journey"
          title="From Systems to Strategy"
        />

        <div ref={ref} className="relative">
          {/* Track */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gold/15">
            <motion.div
              className="absolute inset-0 origin-top bg-gold"
              style={{ scaleY: lineScale }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {timeline.map((m, i) => {
              const leftSide = i % 2 === 0;
              return (
                <div
                  key={m.id}
                  className="relative grid md:grid-cols-2 gap-6 md:gap-16 items-start"
                >
                  {/* Node */}
                  <span
                    className="absolute left-[19px] md:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full border-2 border-gold bg-background z-10"
                    aria-hidden="true"
                  />
                  <Reveal
                    className={
                      leftSide ? "md:pr-14 md:text-right" : "md:col-start-2 md:pl-14"
                    }
                  >
                    <div
                      className={`pl-12 md:pl-0 ${
                        leftSide ? "md:pr-0" : ""
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          leftSide ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-gold/30 text-gold">
                          {m.kind === "education" ? (
                            <GraduationCap className="w-3 h-3" />
                          ) : (
                            <Building2 className="w-3 h-3" />
                          )}
                          {m.tag}
                        </span>
                        {!m.verified && (
                          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-muted-foreground/30 text-muted-foreground">
                            <Clock3 className="w-3 h-3" />
                            To be confirmed
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-xs text-gold/90 mb-2">
                        {m.period}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl font-light">
                        {m.title}
                      </h3>
                      <p className="text-sm text-gold/80 mt-1">{m.org}</p>
                      <p className="text-sm md:text-[15px] leading-relaxed text-foreground/70 mt-4">
                        {m.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          leftSide ? "md:justify-end" : ""
                        }`}
                      >
                        {m.learning.map((l) => (
                          <span
                            key={l}
                            className="text-[11px] px-2.5 py-1 rounded-full bg-gold/10 text-foreground/75 border border-gold/10"
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

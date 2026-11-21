"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Workflow, Cpu, MessageSquare, BadgeCheck } from "lucide-react";
import { skillGroups, evidenceLegend } from "@/content/portfolio";
import { Reveal, SectionHeading } from "./ui-bits";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Target> = {
  Target,
  Workflow,
  Cpu,
  MessageSquare,
};

export default function Skills() {
  const [openGroup, setOpenGroup] = useState<string | null>("marketing");

  return (
    <section id="skills" className="relative py-24 md:py-36" aria-label="Skills">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker="05 — Capabilities"
          title="Evidence-Based Competency Map"
        />

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((g, gi) => {
            const Icon = iconMap[g.icon] ?? Target;
            const isOpen = openGroup === g.id;
            return (
              <Reveal key={g.id} delay={gi * 0.06}>
                <motion.div
                  onMouseEnter={() => setOpenGroup(g.id)}
                  onFocus={() => setOpenGroup(g.id)}
                  className={cn(
                    "group border rounded-lg p-6 md:p-7 bg-card/50 transition-colors duration-300 cursor-default h-full",
                    isOpen ? "border-gold/45" : "border-gold/15"
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "w-10 h-10 rounded-full border flex items-center justify-center transition-colors",
                          isOpen
                            ? "bg-gold text-background border-gold"
                            : "border-gold/40 text-gold"
                        )}
                      >
                        <Icon className="w-4.5 h-4.5" />
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-light">
                        {g.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-foreground/30">
                      0{gi + 1}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {g.blurb}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <motion.span
                        key={s.name}
                        title={s.evidence}
                        whileHover={{ y: -2 }}
                        className={cn(
                          "text-xs px-3 py-1.5 rounded-full border transition-colors",
                          isOpen
                            ? "bg-gold/10 border-gold/25 text-foreground/85"
                            : "border-gold/15 text-foreground/65"
                        )}
                      >
                        {s.name}
                      </motion.span>
                    ))}
                  </div>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      isOpen ? "max-h-40 opacity-100 mt-5" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="border-t border-gold/10 pt-4 space-y-2">
                      {g.skills.slice(0, 4).map((s) => (
                        <p
                          key={s.name}
                          className="flex items-center justify-between text-[11px] text-muted-foreground gap-4"
                        >
                          <span>{s.name}</span>
                          <span className="inline-flex items-center gap-1 text-gold/80 whitespace-nowrap font-mono">
                            <BadgeCheck className="w-3 h-3" />
                            {s.evidence}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-gold/10 pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Evidence legend:
            </span>
            {evidenceLegend.map((e) => (
              <span
                key={e}
                className="text-[11px] text-foreground/60 flex items-center gap-1.5"
              >
                <BadgeCheck className="w-3 h-3 text-gold/70" />
                {e}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">
            Competency labels reflect verifiable sources (coursework, academic
            training, industry exposure) — no invented proficiency percentages.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

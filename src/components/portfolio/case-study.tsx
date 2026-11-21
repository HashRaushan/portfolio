"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";
import { caseStudy } from "@/content/portfolio";
import { Reveal, SectionHeading } from "./ui-bits";
import { cn } from "@/lib/utils";

/* ---------------------------- Visuals ---------------------------- */

function ResearchVisual() {
  const qs = [
    { k: "Who", v: "Who actually buys unbranded notebooks, and in what contexts?" },
    { k: "Where", v: "Which channels concentrate the category's real demand?" },
    { k: "How much", v: "At which price points does demand sit?" },
    { k: "Why", v: "What trade-offs do buyers make — price vs paper vs design?" },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {qs.map((q, i) => (
        <motion.div
          key={q.k}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          className="border border-gold/20 rounded-lg p-4 bg-card/50"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-2">
            {q.k}
          </div>
          <p className="text-sm text-foreground/75 leading-relaxed">{q.v}</p>
        </motion.div>
      ))}
    </div>
  );
}

function PersonasVisual() {
  const personas = [
    {
      name: "The Value Optimiser",
      trait: "Student mindset",
      weight: "Price-first, quality-conscious",
      w: ["Price", "Durability", "Quality"],
    },
    {
      name: "The Daily Professional",
      trait: "Utility mindset",
      weight: "Function-first, habitual buyer",
      w: ["Utility", "Availability", "Consistency"],
    },
    {
      name: "The Design-led Gifter",
      trait: "Expression mindset",
      weight: "Appearance-first, occasional buyer",
      w: ["Design", "Identity", "Presentation"],
    },
  ];
  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-3">
        {personas.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border border-gold/20 rounded-lg p-4 bg-card/50"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-2">
              {p.trait}
            </div>
            <div className="font-display text-lg">{p.name}</div>
            <p className="text-xs text-muted-foreground mt-1">{p.weight}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.w.map((x) => (
                <span
                  key={x}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 border border-gold/15"
                >
                  {x}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
        <Info className="w-3.5 h-3.5 shrink-0" />
        Indicative archetypes used as an analytical framework during coursework — not survey-derived personas.
      </p>
    </div>
  );
}

function MatrixVisual() {
  return (
    <div className="border border-gold/20 rounded-lg bg-card/50 p-5 md:p-8">
      <div className="relative aspect-[4/3] max-w-xl mx-auto">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-l border-b border-gold/40">
          <div className="border-r border-t border-gold/40 bg-gold/[0.03]" />
          <div className="border-t border-gold/40" />
          <div className="border-r border-gold/40" />
          <div />
        </div>
        {/* axis labels */}
        <span className="absolute -left-2 top-1/2 -rotate-90 origin-left font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Perceived quality ↑
        </span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Price →
        </span>
        {/* quadrant labels */}
        <span className="absolute top-[12%] left-[16%] text-[10px] md:text-xs text-muted-foreground/60 font-mono">
          Premium stationery
        </span>
        <span className="absolute top-[12%] right-[6%] text-[10px] md:text-xs text-muted-foreground/60 font-mono text-right">
          National brands
        </span>
        <span className="absolute bottom-[14%] left-[10%] text-[10px] md:text-xs text-muted-foreground/60 font-mono">
          Local commodity
        </span>
        {/* white space marker */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="absolute top-[38%] left-[46%] -translate-x-1/2"
        >
          <div className="relative flex flex-col items-center">
            <span className="w-4 h-4 rounded-full bg-gold shadow-[0_0_24px_rgba(212,162,78,0.8)]" />
            <span className="absolute -top-8 whitespace-nowrap font-mono text-[10px] md:text-xs text-gold tracking-widest">
              THE WHITE SPACE
            </span>
          </div>
        </motion.div>
      </div>
      <p className="mt-6 flex items-center gap-2 text-[11px] text-muted-foreground">
        <Info className="w-3.5 h-3.5 shrink-0" />
        Illustrative framework map, not plotted from measured market data.
      </p>
    </div>
  );
}

function PackagingVisual() {
  return (
    <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 items-center border border-gold/20 rounded-lg bg-card/50 p-6 md:p-8">
      {/* CSS notebook concept */}
      <div className="flex justify-center">
        <motion.div
          initial={{ rotateY: -18, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-44 md:w-52"
        >
          <div className="aspect-[3/4] rounded-r-md rounded-l-sm bg-gradient-to-br from-[#f5efe2] to-[#e2d6bd] shadow-[12px_16px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute left-1.5 top-0 bottom-0 w-[3px] bg-black/10" />
            <div className="absolute inset-x-0 top-[30%] flex flex-col items-center gap-2 px-4">
              <div className="w-full h-px bg-black/25" />
              <div className="font-display text-[#241d12] text-lg tracking-wide">
                THE EVERYDAY BRAND
              </div>
              <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#6b5c3e]">
                Notebook · Concept Label
              </div>
              <div className="w-full h-px bg-black/25" />
            </div>
            <div className="absolute right-3 bottom-3 w-8 h-8 rounded-full border-2 border-[#a67c2e]" />
          </div>
          <div className="h-2 bg-gradient-to-b from-[#c9b98f] to-transparent rounded-b-lg mx-1" />
        </motion.div>
      </div>
      <div>
        <ul className="space-y-3 text-sm text-foreground/75">
          <li className="flex gap-3">
            <span className="text-gold font-mono text-xs pt-0.5">A</span>
            Identity readable at shelf distance
          </li>
          <li className="flex gap-3">
            <span className="text-gold font-mono text-xs pt-0.5">B</span>
            Consistent labelling hierarchy across variants
          </li>
          <li className="flex gap-3">
            <span className="text-gold font-mono text-xs pt-0.5">C</span>
            Structure that lifts perceived value above commodity
          </li>
        </ul>
        <p className="mt-5 flex items-center gap-2 text-[11px] text-muted-foreground">
          <Info className="w-3.5 h-3.5 shrink-0" />
          Design concept visualisation — not the actual product packaging. Editable area for real artwork later.
        </p>
      </div>
    </div>
  );
}

function FunnelVisual() {
  const stages = [
    { n: "Awareness", d: "Visibility in the catchment area — the brand must exist before it can be chosen" },
    { n: "Trial", d: "Availability + shelf presence converting visibility into first purchase" },
    { n: "Repeat", d: "The product itself earning the second purchase" },
  ];
  return (
    <div className="flex flex-col items-center gap-2">
      {stages.map((s, i) => (
        <motion.div
          key={s.n}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="w-full"
          style={{ maxWidth: `${100 - i * 14}%` }}
        >
          <div className="border border-gold/25 bg-gold/[0.06] rounded-lg px-4 py-3 text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
              {s.n}
            </div>
            <p className="text-xs text-foreground/70 mt-1">{s.d}</p>
          </div>
        </motion.div>
      ))}
      <p className="mt-4 flex items-center gap-2 text-[11px] text-muted-foreground">
        <Info className="w-3.5 h-3.5 shrink-0" />
        Classic marketing funnel applied to the launch plan.
      </p>
    </div>
  );
}

function KpiVisual() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="border border-gold/30 rounded-lg bg-gradient-to-br from-gold/15 to-transparent p-6 md:p-8 text-center"
      >
        <div className="font-display text-4xl md:text-6xl gold-gradient-text">100+</div>
        <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-foreground/70 mt-3">
          Units sold
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="border border-gold/30 rounded-lg bg-gradient-to-br from-gold/15 to-transparent p-6 md:p-8 text-center flex flex-col justify-center"
      >
        <div className="font-display text-4xl md:text-6xl gold-gradient-text">15</div>
        <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-foreground/70 mt-3">
          Days
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.16 }}
        className="border border-gold/30 rounded-lg bg-gradient-to-br from-gold/15 to-transparent p-6 md:p-8 text-center flex flex-col justify-center"
      >
        <div className="font-display text-4xl md:text-6xl gold-gradient-text">₹25K</div>
        <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-foreground/70 mt-3">
          Sales value
        </div>
      </motion.div>
    </div>
  );
}

const visualMap: Record<string, () => React.ReactElement> = {
  research: ResearchVisual,
  personas: PersonasVisual,
  matrix: MatrixVisual,
  packaging: PackagingVisual,
  funnel: FunnelVisual,
  kpi: KpiVisual,
};

/* --------------------------- Section ------------------------------ */

export default function CaseStudy() {
  const [active, setActive] = useState(caseStudy.chapters[0].id);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = caseStudy.chapters
      .map((c) => document.getElementById(`cs-${c.id}`))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id.replace("cs-", ""));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const goChapter = (id: string) => {
    document.getElementById(`cs-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="work" className="relative py-24 md:py-36" aria-label="Featured case study">
      {/* Case study hero */}
      <div className="relative border-y border-gold/15 bg-secondary/40 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <div className="absolute inset-0 bg-noise" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-gold mb-6">
              {caseStudy.kicker}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-light text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight">
              {caseStudy.heroLine.split(" ").map((w, i) => (
                <span key={i} className={i >= 2 ? "gold-gradient-text" : ""}>
                  {w}{" "}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-foreground/70">
              {caseStudy.title}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-12 grid grid-cols-3 max-w-3xl mx-auto divide-x divide-gold/15">
              {caseStudy.metrics.map((m) => (
                <div key={m.label} className="px-3 md:px-8">
                  <div className="font-display text-3xl md:text-5xl text-gold">
                    {m.value}
                  </div>
                  <div className="text-xs md:text-sm text-foreground/75 mt-2">
                    {m.label}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-mono mt-0.5">
                    {m.note}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 text-[11px] text-muted-foreground max-w-xl mx-auto flex items-center justify-center gap-2">
              <Info className="w-3.5 h-3.5 shrink-0" />
              {caseStudy.attribution}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-16 md:mt-20">
        <SectionHeading kicker={caseStudy.chapterLabel} title="The Case Study" />

        {/* Chapter nav — mobile chips */}
        <div
          ref={chipsRef}
          className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-8 -mx-5 px-5"
          role="tablist"
          aria-label="Case study chapters"
        >
          {caseStudy.chapters.map((c) => (
            <button
              key={c.id}
              onClick={() => goChapter(c.id)}
              className={cn(
                "shrink-0 font-mono text-[11px] px-3.5 py-2 rounded-full border transition-colors",
                active === c.id
                  ? "bg-gold text-background border-gold"
                  : "border-gold/25 text-foreground/70"
              )}
            >
              {c.no}
            </button>
          ))}
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          {/* Chapter rail — desktop */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-28 space-y-1">
              {caseStudy.chapters.map((c) => (
                <button
                  key={c.id}
                  onClick={() => goChapter(c.id)}
                  className={cn(
                    "flex items-center gap-3 py-1.5 text-left transition-colors w-full",
                    active === c.id ? "text-gold" : "text-foreground/40 hover:text-foreground/75"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[10px] w-6",
                      active === c.id ? "text-gold" : "text-foreground/30"
                    )}
                  >
                    {c.no}
                  </span>
                  <span className="text-[13px]">{c.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Chapters */}
          <div className="lg:col-span-10 space-y-20 md:space-y-28">
            {caseStudy.chapters.map((c) => {
              const Visual = c.visual ? visualMap[c.visual] : null;
              return (
                <article
                  key={c.id}
                  id={`cs-${c.id}`}
                  className="scroll-mt-28"
                  aria-label={`Chapter ${c.no}: ${c.title}`}
                >
                  <Reveal>
                    <div className="flex items-baseline gap-5 mb-6">
                      <span className="font-mono text-sm text-gold/70">{c.no}</span>
                      <h3 className="font-display text-3xl md:text-4xl font-light">
                        {c.title}
                      </h3>
                    </div>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <p className="text-base md:text-lg leading-relaxed text-foreground/75 max-w-3xl">
                      {c.body}
                    </p>
                  </Reveal>
                  {Visual && (
                    <Reveal delay={0.14} className="mt-8">
                      <Visual />
                    </Reveal>
                  )}
                </article>
              );
            })}

            {caseStudy.gallery.length > 0 && (
              <Reveal>
                <div className="pt-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-6">
                    From the project
                  </h3>
                  <div
                    className={cn(
                      "grid gap-4",
                      caseStudy.gallery.length === 1
                        ? "max-w-xs grid-cols-1"
                        : "grid-cols-2 md:grid-cols-3"
                    )}
                  >
                    {caseStudy.gallery.map((g) => (
                      <div
                        key={g.src}
                        className="relative aspect-[2/3] rounded-lg border border-gold/20 overflow-hidden bg-card/60"
                      >
                        <Image
                          src={`/images/project/${g.src}`}
                          alt={g.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 320px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal>
              <div className="border-t border-gold/15 pt-8 flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  End of case study — 10/10 chapters
                </p>
                <button
                  onClick={() =>
                    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-soft transition-colors"
                >
                  Next: Professional Experience
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

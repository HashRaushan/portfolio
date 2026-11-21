"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-media-query";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { site, heroStats } from "@/content/portfolio";
import { MagneticButton } from "./ui-bits";
import NetworkBackground from "./hero-network";

const lineVariants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, 120]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden grid-lines"
      aria-label="Introduction"
    >
      {/* Animated insight network layer */}
      <div className="absolute inset-0">
        <NetworkBackground />
      </div>
      {/* Readability + vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(201,184,146,0.5)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <motion.div
        style={reduced ? {} : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 pt-28 pb-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-mono text-[11px] md:text-xs uppercase tracking-[0.4em] text-gold mb-8"
        >
          Marketing × Operations × Technology
        </motion.p>

        <h1 className="font-display font-light leading-[0.95] tracking-tight">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl"
              variants={lineVariants}
              custom={0}
              initial="hidden"
              animate="show"
            >
              RAUSHAN
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl gold-gradient-text"
              variants={lineVariants}
              custom={1}
              initial="hidden"
              animate="show"
            >
              KUMAR PATHAK
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-6 font-display text-lg md:text-2xl font-light text-foreground/85 italic"
        >
          {site.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed"
        >
          {site.headline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton onClick={() => go("work")}>
            Explore My Work
            <ArrowDown className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton href={site.resumeUrl} external variant="outline">
            Resume
            <FileDown className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton onClick={() => go("contact")} variant="outline">
            Contact
            <Mail className="w-4 h-4" />
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mt-14 grid grid-cols-3 gap-4 md:gap-10 max-w-2xl w-full"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl md:text-4xl text-gold">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] md:text-xs text-foreground/70">
                {s.label}
              </div>
              <div className="text-[10px] md:text-[11px] text-muted-foreground/70 font-mono">
                {s.note}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => go("about")}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}

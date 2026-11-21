"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, site } from "@/content/portfolio";
import { usePortfolioStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const mode = usePortfolioStore((s) => s.mode);
  const setMode = usePortfolioStore((s) => s.setMode);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (mode === "resume") return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold origin-left z-[80]"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[70] transition-all duration-500 no-print",
          scrolled ? "glass border-b border-gold/10 py-3" : "py-5"
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between"
          aria-label="Primary"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            aria-label="Back to top"
          >
            <span className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center font-mono text-xs text-gold group-hover:bg-gold group-hover:text-background transition-colors">
              {site.monogram}
            </span>
            <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70">
              Raushan K. Pathak
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, 6).map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={cn(
                  "text-[13px] tracking-wide transition-colors hover:text-gold",
                  active === l.id ? "text-gold" : "text-foreground/65"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => setMode("resume")}
              className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] border border-gold/40 rounded-full px-4 py-2 hover:bg-gold hover:text-background transition-colors"
              aria-label="Switch to professional resume view"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume Mode
            </button>
            <button
              className="lg:hidden p-2.5 rounded-full border border-gold/30"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[75] bg-background/95 backdrop-blur-xl lg:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-1">
              {navLinks.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => go(l.id)}
                  className="text-left font-display text-3xl py-2.5 text-foreground/80 hover:text-gold transition-colors"
                >
                  <span className="font-mono text-xs text-gold/60 mr-4">
                    0{i + 1}
                  </span>
                  {l.label}
                </motion.button>
              ))}
            </div>
            <div className="p-8 flex gap-3 border-t border-gold/10">
              <button
                onClick={() => {
                  setMode("resume");
                  setOpen(false);
                }}
                className="flex-1 border border-gold/40 rounded-full py-3 font-mono text-xs uppercase tracking-[0.2em]"
              >
                Resume Mode
              </button>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gold text-background rounded-full py-3 font-mono text-xs uppercase tracking-[0.2em] text-center"
              >
                Open Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

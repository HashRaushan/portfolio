"use client";

import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

/* Scroll-reveal wrapper */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Chapter kicker + big editorial title */
export function SectionHeading({
  kicker,
  title,
  align = "left",
  className,
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] tracking-tight text-balance">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <div
          className={cn(
            "hairline mt-8",
            align === "center" ? "mx-auto w-40" : "w-40"
          )}
        />
      </Reveal>
    </div>
  );
}

/* Magnetic hover button */
export function MagneticButton({
  children,
  className,
  href,
  onClick,
  external,
  variant = "gold",
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  variant?: "gold" | "outline" | "ghost-dark";
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16 });
  const sy = useSpring(y, { stiffness: 180, damping: 16 });

  function onMove(e: MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 min-h-11 cursor-pointer",
    variant === "gold" &&
      "bg-primary text-primary-foreground hover:bg-gold-soft",
    variant === "outline" &&
      "border border-gold/40 text-foreground hover:border-gold hover:text-gold",
    variant === "ghost-dark" &&
      "bg-foreground text-background hover:bg-foreground/85",
    className
  );

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          className={styles}
          aria-label={ariaLabel}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={styles} aria-label={ariaLabel}>
          {children}
        </button>
      )}
    </motion.div>
  );
  return inner;
}

/* Infinite word marquee */
export function Marquee({ words }: { words: string[] }) {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-gold/15 py-5 select-none" aria-hidden="true">
      <motion.div
        className="flex gap-10 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {row.map((w, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl font-light text-foreground/35 flex items-center gap-10"
          >
            {w}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold/50" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

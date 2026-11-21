"use client";

import { ArrowUp, Linkedin, Mail, Phone } from "lucide-react";
import { site, navLinks } from "@/content/portfolio";

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="mt-auto border-t border-gold/15 bg-secondary/40 no-print" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center font-mono text-xs text-gold">
                {site.monogram}
              </span>
              <span className="font-display text-lg">{site.name}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              {site.headline}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70 mt-4">
              {site.location} · {site.languages.join(" / ")}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-y-2.5">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="text-left text-sm text-foreground/65 hover:text-gold transition-colors w-fit"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Connect
            </p>
            <div className="flex gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Send email"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                aria-label="Call phone"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-gold transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Back to top
            </button>
          </div>
        </div>

        <div className="hairline my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.2em]">
            Business Thinking Meets Technology
          </p>
        </div>
      </div>
    </footer>
  );
}

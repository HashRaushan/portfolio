"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, FileQuestion } from "lucide-react";
import { certificates, type Certificate } from "@/content/portfolio";
import { Reveal, SectionHeading } from "./ui-bits";

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section
      id="credentials"
      className="relative py-24 md:py-36 bg-secondary/30"
      aria-label="Certifications and learning"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker="06 — Credentials"
          title="Certifications & Continuous Learning"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06}>
              <button
                onClick={() => setSelected(c)}
                className="group w-full text-left border border-gold/15 rounded-lg bg-card/50 p-6 hover:border-gold/45 transition-colors h-full flex flex-col min-h-44"
                aria-haspopup="dialog"
                aria-label={`Open details for ${c.title}`}
              >
                <span className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-background transition-colors">
                  {c.url ? (
                    <Award className="w-4.5 h-4.5" />
                  ) : (
                    <FileQuestion className="w-4.5 h-4.5" />
                  )}
                </span>
                <h3 className="font-display text-lg leading-snug">{c.title}</h3>
                <p className="text-xs text-gold/85 mt-1.5">{c.issuer}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed flex-1">
                  {c.detail}
                </p>
                <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 group-hover:text-gold transition-colors">
                  {c.cta}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="bg-card border-gold/25 max-w-3xl w-[calc(100vw-2rem)] p-0 overflow-hidden">
          {selected && (
            <>
              <DialogHeader className="p-6 pb-4">
                <DialogTitle className="font-display text-xl font-light text-left">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-left text-sm text-gold/85">
                  {selected.issuer} — {selected.detail}
                </DialogDescription>
              </DialogHeader>
              <div className="px-6">
                {selected.embeddable && selected.url ? (
                  <div className="rounded-md border border-gold/20 overflow-hidden bg-background/50">
                    <iframe
                      src={selected.url}
                      title={`${selected.title} — certificate preview`}
                      className="w-full h-[62vh] min-h-72"
                      loading="lazy"
                    />
                  </div>
                ) : selected.url ? (
                  <div className="rounded-md border border-dashed border-gold/30 bg-background/40 p-8 text-center">
                    <p className="text-sm text-muted-foreground mb-5">
                      This credential is verified externally. A live preview
                      cannot be embedded, but the official link below is safe to
                      open.
                    </p>
                    <Button
                      asChild
                      className="bg-gold text-background hover:bg-gold-soft"
                    >
                      <a
                        href={selected.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selected.cta}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-md border border-dashed border-gold/30 bg-background/40 p-8 text-center">
                    <FileQuestion className="w-8 h-8 text-gold/50 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      Certificate document placeholder — the official document
                      will be attached once available. No credential details are
                      invented.
                    </p>
                  </div>
                )}
              </div>
              <div className="p-6 flex justify-end gap-3">
                {selected.url && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-gold/40 text-foreground hover:text-gold"
                  >
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in new tab
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

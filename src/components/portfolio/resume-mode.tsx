"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Printer, ExternalLink } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-media-query";
import { usePortfolioStore } from "@/lib/store";
import { site, experience } from "@/content/portfolio";

const summary =
  "Business-focused professional with an interdisciplinary academic foundation spanning computer science, business administration and an MBA in Marketing (major) with Operations (minor). Interested in marketing strategy, brand development, market research, operations management and business growth. Value the ability to connect customer insight with business execution.";

const education = [
  {
    degree: "MBA — Marketing Major, Operations Minor",
    school: "Lovely Professional University",
    year: "Expected 2028",
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    school: "Manipal University Jaipur",
    year: "2026",
  },
  {
    degree: "Diploma in Computer Science",
    school: "Mansarovar University, Bhopal",
    year: "2023",
  },
];

const projectBullets = [
  "Conducted market research on customer preferences and pricing sensitivity in the unbranded notebook segment.",
  "Formulated a brand strategy covering positioning, packaging and go-to-market approach.",
  "Applied MBA marketing and consumer behaviour concepts to convert a generic commodity product into a recognisable brand.",
];

const skillSets = [
  {
    group: "Marketing & Brand",
    items: [
      "Market Research",
      "Brand Strategy",
      "Brand Positioning",
      "Consumer Behaviour",
      "Go-to-Market Planning",
      "Competitive Analysis",
    ],
  },
  {
    group: "Operations & Management",
    items: [
      "Operations Management Concepts",
      "Business Process Thinking",
      "Workflow Understanding",
      "Business Problem Analysis",
      "Cross-functional Thinking",
    ],
  },
  {
    group: "Technology",
    items: [
      "Python Fundamentals",
      "Computer Science Foundation",
      "Generative AI Literacy",
    ],
  },
  {
    group: "Professional",
    items: [
      "Business Communication",
      "Research & Analysis",
      "Presentation & Storytelling",
      "Learning Agility",
      "Analytical Thinking",
    ],
  },
];

const certs = [
  {
    title: "Forage Job Simulation Certification",
    url: "https://www.theforage.com/completion-certificates/MBA4MnZTNFEoJZGnk/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_6a70a6ce0f4144b756dc85a4_1785768403374_completion_certificate.pdf",
  },
  {
    title: "HackerRank Certification",
    url: "https://www.hackerrank.com/certificates/3e371fbec0e0",
  },
  {
    title: "What Is Generative AI? — Pinar Demirdag (course completed)",
    url: "https://lnkd.in/dn6rAxxw",
  },
  {
    title: "GUVI Python 100-Day Programme (Beginner to Expert) — 'Zero Hero' recognition",
    url: null,
  },
];

const printCss = `
@media print {
  .rkm-shell { position: static !important; height: auto !important; overflow: visible !important; background: #fff !important; }
  .rkm-toolbar { display: none !important; }
  .rkm-doc { box-shadow: none !important; max-width: 100% !important; padding: 0 !important; }
  .rkm-entry { break-inside: avoid; }
  body { background: #fff !important; color: #1c1917 !important; }
}
`;

export default function ResumeMode() {
  const setMode = usePortfolioStore((s) => s.setMode);
  const reduced = useReducedMotion();

  const anim = (i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.35, delay: 0.05 * i, ease: "easeOut" as const },
        };

  let idx = -1;
  const step = () => ++idx;

  return (
    <div className="rkm-shell fixed inset-0 z-[60] overflow-y-auto bg-[#f7f5f0] text-stone-900">
      <style dangerouslySetInnerHTML={{ __html: printCss }} />

      {/* Toolbar */}
      <div className="rkm-toolbar sticky top-0 z-10 bg-stone-900 text-stone-100 px-4 md:px-6 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-8 h-8 rounded-full border border-amber-400/60 flex items-center justify-center font-mono text-[10px] text-amber-400 shrink-0">
            RKP
          </span>
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] truncate">
            Resume Mode
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.15em] border border-stone-600 rounded-full px-3.5 py-2 hover:bg-stone-100 hover:text-stone-900 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / PDF
          </button>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.15em] border border-stone-600 rounded-full px-3.5 py-2 hover:bg-stone-100 hover:text-stone-900 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Drive
          </a>
          <button
            onClick={() => setMode("creative")}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.15em] bg-amber-400 text-stone-900 rounded-full px-3.5 py-2 hover:bg-amber-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Creative Portfolio
          </button>
        </div>
      </div>

      {/* Document */}
      <main className="rkm-doc max-w-3xl mx-auto px-5 md:px-10 py-10 md:py-14">
        <motion.header {...anim(step())} className="text-center">
          <h1 className="font-[family-name:var(--font-display-cormorant)] text-4xl md:text-5xl font-light tracking-tight">
            RAUSHAN KUMAR PATHAK
          </h1>
          <p className="mt-3 text-sm text-stone-600 max-w-xl mx-auto">
            MBA Candidate | Marketing &amp; Operations | Connecting Customer
            Insight with Business Execution
          </p>
          <p className="mt-4 font-mono text-[11px] text-stone-500 flex flex-wrap justify-center gap-x-3 gap-y-1">
            <a href={`mailto:${site.email}`} className="hover:text-stone-900 underline underline-offset-2">
              {site.email}
            </a>
            <span aria-hidden="true">|</span>
            <a href={`tel:${site.phoneHref}`} className="hover:text-stone-900 underline underline-offset-2">
              {site.phone}
            </a>
            <span aria-hidden="true">|</span>
            <span>{site.location}</span>
            <span aria-hidden="true">|</span>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 underline underline-offset-2">
              linkedin.com/in/iraushanx
            </a>
          </p>
        </motion.header>

        <hr className="my-8 border-stone-300" />

        <motion.section {...anim(step())} aria-label="Professional summary" className="rkm-entry">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-3">
            Professional Summary
          </h2>
          <p className="text-[15px] leading-relaxed text-stone-700">{summary}</p>
        </motion.section>

        <motion.section {...anim(step())} aria-label="Education" className="rkm-entry mt-9">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="flex flex-wrap items-baseline justify-between gap-x-4">
                <div>
                  <h3 className="font-[family-name:var(--font-display-cormorant)] text-lg">
                    {e.degree}
                  </h3>
                  <p className="text-sm text-stone-600">{e.school}</p>
                </div>
                <span className="font-mono text-xs text-stone-500">{e.year}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs italic text-stone-500">
            Interdisciplinary journey from computer science to business management.
          </p>
        </motion.section>

        <motion.section {...anim(step())} aria-label="Professional experience" className="rkm-entry mt-9">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-4">
            Professional Experience
          </h2>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <div>
              <h3 className="font-[family-name:var(--font-display-cormorant)] text-lg">
                {experience.role} — {experience.org}
              </h3>
              <p className="text-sm text-stone-600">{experience.context}</p>
            </div>
            <span className="font-mono text-xs text-stone-500">{experience.period}</span>
          </div>
          <ul className="mt-3 space-y-2 list-disc list-outside pl-5 text-[15px] leading-relaxed text-stone-700">
            {experience.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section {...anim(step())} aria-label="Featured project" className="rkm-entry mt-9">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-4">
            Featured Project
          </h2>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-[family-name:var(--font-display-cormorant)] text-lg">
              Brand Development Strategy for Unbranded Notebooks
            </h3>
            <span className="font-mono text-xs text-stone-500">
              MBA Coursework · LPU
            </span>
          </div>
          <ul className="mt-3 space-y-2 list-disc list-outside pl-5 text-[15px] leading-relaxed text-stone-700">
            {projectBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-stone-500">
            Reported project outcome: 100+ units sold within 15 days, worth ₹25,000 in reported sales — attributed to the coursework project team.
          </p>
        </motion.section>

        <motion.section {...anim(step())} aria-label="Skills" className="rkm-entry mt-9">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-4">
            Skills
          </h2>
          <div className="space-y-4">
            {skillSets.map((g) => (
              <div key={g.group}>
                <p className="text-sm font-medium text-stone-800 mb-2">{g.group}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-stone-300 text-stone-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...anim(step())} aria-label="Certifications" className="rkm-entry mt-9">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-4">
            Certifications &amp; Learning
          </h2>
          <ul className="space-y-2.5">
            {certs.map((c) => (
              <li key={c.title} className="flex items-start gap-2 text-[15px] text-stone-700">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>
                  {c.title}
                  {c.url && (
                    <>
                      {" "}
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:underline underline-offset-2 break-all"
                      >
                        (verify)
                      </a>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section {...anim(step())} aria-label="Languages" className="rkm-entry mt-9">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-3">
            Languages
          </h2>
          <p className="text-[15px] text-stone-700">{site.languages.join(" · ")}</p>
        </motion.section>

        <motion.footer {...anim(step())} className="mt-12 pt-6 border-t border-stone-300 text-center">
          <p className="text-xs text-stone-500">
            References and detailed project documentation available on request.
          </p>
          <button
            onClick={() => setMode("creative")}
            className="mt-3 text-xs text-amber-700 hover:underline underline-offset-2"
          >
            Return to the full interactive portfolio
          </button>
        </motion.footer>
      </main>
    </div>
  );
}

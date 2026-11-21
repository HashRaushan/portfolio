# Raushan Kumar Pathak — Portfolio

Personal portfolio website for **Raushan Kumar Pathak** — MBA candidate in
Marketing & Operations, with an engineering foundation (SCADA / industrial
automation) and a BBA in business administration.

Warm editorial design: cream paper background, Cormorant Garamond typography,
gold accents, and a subtle network animation in the hero.

**Sections:** Hero · About (photo + learning focus) · Journey (education timeline) ·
Featured Work (case study: *From Unbranded to Brand-Led*) · Experience (MEIL —
Site In-Charge, BWSSB project) · Skills (evidence-based competency map) ·
Credentials (Forage / HackerRank / GUVI certificates) · Resume (embedded Drive
preview + clean Resume Mode) · Contact (validated form with email notifications)

## Tech stack

| Layer      | Choice                                            |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 16 (App Router) + TypeScript              |
| Styling    | Tailwind CSS 4 + shadcn/ui (New York)             |
| Motion     | Framer Motion (scroll reveals, section headings)  |
| Hosting    | GitHub Pages — 100% static export, no backend     |
| Forms      | react-hook-form + zod validation                  |
| Icons      | Lucide                                            |

## Running locally

```bash
# 1. Install dependencies
bun install        # or: npm install

# 2. Start the dev server on http://localhost:3000
bun run dev
```

No environment variables are required — see `.env.example` for the optional
Web3Forms key override.

## How the contact form works

The site is fully static (GitHub Pages has no server), so the entire
submission pipeline runs in the visitor's browser:

```
Visitor submits the form
  ├─ zod validation
  ├─ honeypot + timing spam checks (bots get a fake success, no email)
  └─ email notification chain, straight from the browser:
       1) FormSubmit  → email.raushanpathak@gmail.com   (primary)
       2) Web3Forms   → same inbox                      (backup)
```

Why browser-side? FormSubmit's free tier sits behind a Cloudflare challenge
and Web3Forms' free plan is client-only — both reject server-to-server calls.
Real visitors' browsers pass both.

## Deployment (GitHub Pages)

Deployment is **automatic** — every push to `main` triggers the included
GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the
static export and publishes it.

One-time setup:

1. Repo **Settings → Pages → Build and deployment → Source** → select
   **GitHub Actions**.
2. Push to `main` (or run the workflow manually from the **Actions** tab).
3. The site goes live at `https://hashraushan.github.io/portfolio/`.

The base path (`/portfolio`) is defined in `next.config.ts`; the SEO URL
lives in `src/content/portfolio.ts` (`site.url`). If you later attach a
custom domain, update both.

## Project structure

```
src/
  app/                  # App Router: page, layout, SEO routes (sitemap, robots,
  components/portfolio/ # one file per section + shared ui-bits (Reveal…)
  content/portfolio.ts  # SINGLE SOURCE OF TRUTH for all site content
  lib/                  # zustand store + utils
public/images/          # photo + project gallery images
.github/workflows/      # GitHub Actions — build + deploy to Pages
```

All copy — experience details, certificates, stats, links — lives in
`src/content/portfolio.ts`. Edit that file to update the site.

---

© 2026 Raushan Kumar Pathak. All rights reserved.

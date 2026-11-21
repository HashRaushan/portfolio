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
| Database   | Prisma ORM + SQLite (contact message log)         |
| Forms      | react-hook-form + zod validation                  |
| Icons      | Lucide                                            |

## Running locally

```bash
# 1. Install dependencies (also generates the Prisma client)
bun install        # or: npm install

# 2. Create the SQLite database (stored at db/custom.db)
bun run db:push

# 3. Start the dev server on http://localhost:3000
bun run dev
```

No environment variables are required — see `.env.example` for the optional
Web3Forms key override.

## How the contact form works

```
Visitor submits the form
  └─ POST /api/contact
       ├─ zod validation · honeypot · timing check · IP rate limit (5 / 10 min)
       ├─ save to SQLite (best effort — skipped gracefully on read-only hosts)
       └─ 201 { ok: true, notify: "client" }
            └─ visitor's browser sends the email notification
                 1) FormSubmit  → email.raushanpathak@gmail.com   (primary)
                 2) Web3Forms   → same inbox                      (backup)
```

Why browser-side? FormSubmit's free tier sits behind a Cloudflare challenge
and Web3Forms' free plan is client-only — both reject server-to-server calls.
Real visitors' browsers pass both, and the server keeps doing what it is good
at: spam filtering and persistence. Bots that trip the honeypot/timing checks
receive a fake success and never trigger an email.

## Publish to GitHub

The repository is already initialised on the `main` branch with a clean
history — no secrets, no database, no build artifacts (see `.gitignore`).
To publish it:

1. Create an **empty** repository at [github.com/new](https://github.com/new)
   (do **not** tick "Add a README" — keep it empty).
2. Then push from the project root:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

> Tip: with the GitHub CLI it is a single command —
> `gh repo create <repo-name> --public --source=. --push`.

## Deployment (Vercel free tier)

1. Push this repository to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset is auto-detected (Next.js). No environment variables are
   required — `postinstall` runs `prisma generate` automatically.
4. Deploy.

After the first deploy, point SEO at the live URL: replace `site.url` in
`src/content/portfolio.ts` with your real address (e.g.
`https://your-project.vercel.app`). This drives the canonical tag, sitemap and
social-share metadata.

> Note: on Vercel the SQLite file is ephemeral, so the contact-message log is
> not persistent there — email delivery is unaffected. To keep a permanent
> log, connect a hosted Postgres (e.g. Neon/Supabase free tier) and switch the
> Prisma datasource provider.

## Project structure

```
src/
  app/                  # App Router: page, layout, SEO routes (sitemap, robots,
    api/contact/        # contact endpoint — validation, rate limit, storage
  components/portfolio/ # one file per section + shared ui-bits (Reveal…)
  content/portfolio.ts  # SINGLE SOURCE OF TRUTH for all site content
  lib/db.ts             # Prisma client singleton
prisma/schema.prisma    # ContactMessage model (SQLite at ../db/custom.db)
public/images/          # photo + project gallery images
```

All copy — experience details, certificates, stats, links — lives in
`src/content/portfolio.ts`. Edit that file to update the site.

---

© 2026 Raushan Kumar Pathak. All rights reserved.

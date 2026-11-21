import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  organisation: z.string().trim().max(200).optional().or(z.literal("")),
  enquiryType: z.string().trim().min(1).max(80),
  message: z.string().trim().min(10).max(3000),
  company_website: z.string().max(0).optional().or(z.literal("")),
  startedAt: z.number().int().nonnegative().optional(),
});

/* Naive in-memory rate limit: 5 submissions per IP per 10 minutes. */
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > LIMIT;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages sent recently. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form fields and try again." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    /* Honeypot: real users never fill this hidden field. */
    if (data.company_website && data.company_website.length > 0) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }

    /* Timing check: reject submissions faster than a human could type. */
    if (typeof data.startedAt === "number" && Date.now() - data.startedAt < 2500) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }

    /* Persistence — best effort. Locally (and anywhere with a writable
       filesystem) messages are stored in SQLite via Prisma. On serverless
       hosts like Vercel the filesystem is read-only/ephemeral, so the write
       may fail; that must never lose the visitor's message — the email
       notification below is sent from the browser regardless. */
    try {
      await db.contactMessage.create({
        data: {
          name: data.name,
          email: data.email,
          organisation: data.organisation || null,
          enquiryType: data.enquiryType,
          message: data.message,
        },
      });
    } catch (dbErr) {
      console.error("Contact message could not be persisted:", dbErr);
    }

    /* Email delivery happens in the visitor's browser (see contact.tsx):
       FormSubmit and Web3Forms both reject server-side calls on free plans
       (Cloudflare challenge / client-only API), but happily accept real
       browser requests. The server's job here is spam filtering + storage;
       "notify: client" tells the browser to fire the email chain.
       Honeypot/timing-trapped spam gets { ok: true } without that field,
       so bots see success but no email is ever sent. */
    return NextResponse.json({ ok: true, notify: "client" }, { status: 201 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong while sending your message. Please try again." },
      { status: 500 }
    );
  }
}

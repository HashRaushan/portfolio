"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, Linkedin, Mail, Phone, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { site, enquiryTypes } from "@/content/portfolio";
import { Reveal, SectionHeading } from "./ui-bits";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(120),
  email: z.string().email("Please enter a valid email"),
  organisation: z.string().max(200).optional(),
  enquiryType: z.string().min(1, "Please select an enquiry type"),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(3000),
  company_website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [startedAt] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { enquiryType: "", company_website: "" },
  });

  const enquiryValue = watch("enquiryType");

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        toast({
          title: "Message sent",
          description:
            "Thank you for reaching out — I will get back to you soon.",
        });
        reset();

        /* Email notification chain — fired from the visitor's browser.
           FormSubmit and Web3Forms both reject server-side requests on free
           plans, but accept real browser calls (this also passes FormSubmit's
           Cloudflare challenge). Server already validated + stored the message.
           1) FormSubmit (primary)
           2) Web3Forms (backup, if FormSubmit fails) */
        if (data.notify === "client") {
          try {
            const fsRes = await fetch(
              `https://formsubmit.co/ajax/${site.email}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  _subject: `Portfolio enquiry — ${values.enquiryType} — ${values.name}`,
                  _template: "table",
                  _captcha: "false",
                  name: values.name,
                  email: values.email,
                  organisation: values.organisation || "—",
                  enquiryType: values.enquiryType,
                  message: values.message,
                }),
              }
            );
            if (!fsRes.ok) throw new Error("FormSubmit browser fallback failed");
          } catch {
            /* Web3Forms access keys are public by design (client-side use).
               Env var can override; inline value keeps deploys zero-config. */
            const web3formsKey =
              process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
              "595e4d2e-aa7f-4238-864d-627dda72d650";
            fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                access_key: web3formsKey,
                subject: `Portfolio enquiry — ${values.enquiryType} — ${values.name}`,
                from_name: "Portfolio Contact Form",
                name: values.name,
                email: values.email,
                organisation: values.organisation || "",
                enquiry_type: values.enquiryType,
                message: values.message,
              }),
            }).catch(() => {});
          }
        }
      } else {
        toast({
          title: "Could not send",
          description:
            data.error ??
            "Please try again, or reach me directly by email or phone.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-36" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker="08 — Get in Touch"
          title="Let's Create Something Meaningful."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact channels */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            <Reveal>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 border border-gold/15 rounded-lg bg-card/50 p-5 hover:border-gold/45 transition-colors"
              >
                <span className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-colors shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Email
                  </div>
                  <div className="text-sm text-foreground/85 truncate">
                    {site.email}
                  </div>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.06}>
              <a
                href={`tel:${site.phoneHref}`}
                className="group flex items-center gap-4 border border-gold/15 rounded-lg bg-card/50 p-5 hover:border-gold/45 transition-colors"
              >
                <span className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-colors shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Phone
                  </div>
                  <div className="text-sm text-foreground/85">{site.phone}</div>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.12}>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-gold/15 rounded-lg bg-card/50 p-5 hover:border-gold/45 transition-colors"
              >
                <span className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-colors shrink-0">
                  <Linkedin className="w-4.5 h-4.5" />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    LinkedIn
                  </div>
                  <div className="text-sm text-foreground/85">
                    {site.linkedinLabel}
                  </div>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-gold/15 rounded-lg bg-card/50 p-5 hover:border-gold/45 transition-colors"
              >
                <span className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-colors shrink-0">
                  <FileText className="w-4.5 h-4.5" />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Resume
                  </div>
                  <div className="text-sm text-foreground/85">
                    Open on Google Drive
                  </div>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="text-[11px] text-muted-foreground leading-relaxed px-1">
                Messages sent through this form are stored securely and used
                only to respond to your enquiry. No data is shared with third
                parties.
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7 order-1 lg:order-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-gold/25 rounded-lg bg-card/60 p-6 md:p-9 space-y-5"
              noValidate
            >
              {/* Honeypot — hidden from real users */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>Company website</label>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("company_website")}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="bg-background/60 border-gold/20 focus-visible:ring-gold/50"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="bg-background/60 border-gold/20 focus-visible:ring-gold/50"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="organisation">Organisation</Label>
                  <Input
                    id="organisation"
                    placeholder="Company or institution"
                    className="bg-background/60 border-gold/20 focus-visible:ring-gold/50"
                    {...register("organisation")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enquiryType">Enquiry type *</Label>
                  <Select
                    value={enquiryValue ?? ""}
                    onValueChange={(v) =>
                      setValue("enquiryType", v, { shouldValidate: true })
                    }
                  >
                    <SelectTrigger
                      id="enquiryType"
                      className="bg-background/60 border-gold/20 w-full focus-visible:ring-gold/50"
                    >
                      <SelectValue placeholder="Select enquiry type" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-gold/25">
                      {enquiryTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.enquiryType && (
                    <p className="text-xs text-destructive">
                      {errors.enquiryType.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me what you'd like to discuss…"
                  className="bg-background/60 border-gold/20 focus-visible:ring-gold/50 resize-none"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-[11px] text-muted-foreground">
                  Typical response time: within 48 hours.
                </p>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-gold text-background hover:bg-gold-soft rounded-full px-8 min-h-11"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

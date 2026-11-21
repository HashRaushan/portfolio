import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { site } from "@/content/portfolio";

const cormorant = Cormorant_Garamond({
  variable: "--font-display-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-sans-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Raushan Kumar Pathak — MBA Candidate in Marketing and Operations",
    template: "%s | Raushan Kumar Pathak",
  },
  description:
    "Portfolio of Raushan Kumar Pathak — MBA candidate in Marketing and Operations with a computer science foundation. Connecting customer insight with business execution: brand strategy, market research and operations thinking.",
  keywords: [
    "Raushan Kumar Pathak",
    "MBA candidate",
    "Marketing and Operations",
    "brand strategy",
    "market research",
    "portfolio",
    "Lovely Professional University",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Raushan Kumar Pathak — MBA Candidate in Marketing and Operations",
    description:
      "Business Perspective. Strategic Thinking. Technological Curiosity. Explore the featured brand development case study and professional journey.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raushan Kumar Pathak — MBA Candidate in Marketing and Operations",
    description:
      "Business Perspective. Strategic Thinking. Technological Curiosity.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#f2ecdf",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "MBA Candidate — Marketing & Operations",
  description: site.headline,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Lovely Professional University" },
    { "@type": "CollegeOrUniversity", name: "Manipal University Jaipur" },
    { "@type": "CollegeOrUniversity", name: "Mansarovar Global University" },
  ],
  knowsLanguage: site.languages,
  sameAs: [site.linkedin],
  url: site.url,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${manrope.variable} ${plexMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

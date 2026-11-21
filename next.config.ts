import type { NextConfig } from "next";

/* ------------------------------------------------------------------
   GitHub Pages deployment — fully static export.
   The site is served from https://hashraushan.github.io/portfolio/
   so every asset/URL is prefixed with the /portfolio base path.
   There is no backend: the contact form emails directly from the
   visitor's browser (FormSubmit, with Web3Forms as backup).
------------------------------------------------------------------- */
const OWNER = "HashRaushan";
const REPO = "portfolio";
const basePath = `/${REPO}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true, // GitHub Pages cannot run the Next.js image optimizer
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;

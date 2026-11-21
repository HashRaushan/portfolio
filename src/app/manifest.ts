import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import { site } from "@/content/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Portfolio`,
    short_name: site.monogram,
    description: site.headline,
    start_url: "/portfolio/",
    display: "standalone",
    background_color: "#f2ecdf",
    theme_color: "#f2ecdf",
    icons: [
      {
        /* Served under the /portfolio base path on GitHub Pages. */
        src: "/portfolio/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}

import type { MetadataRoute } from "next";
import { site } from "@/content/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Portfolio`,
    short_name: site.monogram,
    description: site.headline,
    start_url: "/",
    display: "standalone",
    background_color: "#f2ecdf",
    theme_color: "#f2ecdf",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}

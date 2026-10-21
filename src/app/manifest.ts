import type { MetadataRoute } from "next";
import { site } from "@/content/profile";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.handle,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0c0e10",
    theme_color: "#0c0e10",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}

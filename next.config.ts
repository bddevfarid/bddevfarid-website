import type { NextConfig } from "next";

// `npm run build` makes a normal Next.js app (`.next/`, served by
// `npm start`) for Node.js hosting such as Hostinger's Next.js deploys.
// `npm run build:static` sets STATIC_EXPORT=1 and writes a plain
// HTML/CSS/JS site to `out/` for hosts without Node.js.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const, trailingSlash: true } : {}),
  images: { unoptimized: true },
};

export default nextConfig;

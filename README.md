# bddevfarid-website

Portfolio for **Faridul Islam** — Lead WordPress Engineer & Plugin Security Specialist — at [bddevfarid.com](https://bddevfarid.com).

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and TypeScript, exported as a static site.

## Edit the content

Every word on the site lives in [`src/content/profile.ts`](src/content/profile.ts): headline, stats, plugins and install counts, case study, experience, insights, skills and social links. Change it there; no layout code needs touching.

- Photo: `public/images/faridul-islam.jpg` (also used in the social share image).
- Plugin install counts come from WordPress.org. Re-check them before each deploy.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

This writes a complete static site to `out/`, including:

- `index.html` with title, description, Open Graph / X cards, canonical URL and Person JSON-LD for Google
- `opengraph-image` — the 1200×630 share preview, generated from the profile data
- `icon`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`
- `.htaccess` — HTTPS + bare-domain redirect, caching, security headers, and PNG content type for the generated images

## Deploy to Hostinger

bddevfarid.com currently runs an empty WordPress install on Hostinger. To replace it:

1. Back up the existing `public_html` (hPanel → File Manager, or Backups).
2. Run `npm run build`.
3. Upload **the contents of `out/`** (not the folder itself) into `public_html`, including the hidden `.htaccess`.
4. Visit https://bddevfarid.com and check the page, then test the share preview with LinkedIn's Post Inspector.
5. In Google Search Console, request indexing for https://bddevfarid.com/ so Google picks up the new title and description.

Any static host works too (Netlify, Vercel, GitHub Pages, Cloudflare Pages): point it at `npm run build` with `out` as the output folder.

## Features

- Light and dark theme that follows the OS, with a toggle that remembers the choice and never flashes on load
- Scroll-in animations that respect "reduce motion" and never hide content when JavaScript is off
- Skip link, semantic landmarks and labelled controls for screen readers and keyboard users
- Responsive from 320px phones to wide desktops, no horizontal scroll

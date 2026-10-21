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
npm start
```

Builds use webpack (`next build --webpack`). Turbopack's production build spawns separate Node processes for CSS loaders, which fails on some hosted build machines; webpack runs them in-process. `npm run dev` still uses Turbopack locally.

Every page, the share image and the SEO files are prerendered at build time:

- `/` with title, description, Open Graph / X cards, canonical URL and Person JSON-LD for Google
- `/opengraph-image` — the 1200×630 share preview, generated from the profile data
- `/icon`, `/manifest.webmanifest`, `/robots.txt`, `/sitemap.xml`

## Deploy

### Hostinger (Node.js / Next.js app)

Connect the GitHub repo and use:

| Setting | Value |
| --- | --- |
| Framework | Next.js |
| Node.js | 20 or newer |
| Build command | `npm run build` |
| Output directory | `.next` |
| Start command | `npm start` |

Then visit https://bddevfarid.com, test the share preview with LinkedIn's Post Inspector, and request indexing for https://bddevfarid.com/ in Google Search Console.

### Static hosting (no Node.js)

```bash
npm run build:static
```

This writes a plain HTML/CSS/JS site to `out/`, plus [`deploy/.htaccess`](deploy/.htaccess) (HTTPS + bare-domain redirect, caching, security headers, and PNG type for the generated images). Back up the old site, then upload **the contents of `out/`**, including the hidden `.htaccess`, into `public_html`. Netlify, Cloudflare Pages and GitHub Pages work the same way with `out` as the output folder.

## Features

- Light and dark theme that follows the OS, with a toggle that remembers the choice and never flashes on load
- Scroll-in animations that respect "reduce motion" and never hide content when JavaScript is off
- Skip link, semantic landmarks and labelled controls for screen readers and keyboard users
- Responsive from 320px phones to wide desktops, no horizontal scroll

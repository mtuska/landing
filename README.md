# noriq.dev — landing page

React + Vite landing page for Noriq, deployed as a Cloudflare Worker with static assets.

## Stack

- **React 18 + TypeScript + Vite** — the page is prerendered to static HTML at build time (`scripts/prerender.mjs`) and hydrated on the client, so crawlers get full content without executing JS.
- **Cloudflare Worker** (`worker/index.ts`) — serves the built assets, 301-redirects `www.noriq.dev` → `noriq.dev`, and adds security headers. `run_worker_first` is enabled so the redirect sees every request.
- **Self-hosted fonts** — Space Grotesk (variable) and IBM Plex Mono subsets in `public/fonts/`, extracted from the original design bundle. No external requests.
- **Mission Control demo** — the hero iframe loads `public/demo/mission-control.html`, a self-contained mock of the app UI extracted from `design.html` (marked `noindex`, excluded in robots.txt).

## Commands

```bash
npm run dev       # Vite dev server (client only, no worker)
npm run build     # client build + SSR build + prerender into dist/
npm run preview   # build then wrangler dev (full worker + assets)
npm run deploy    # build then wrangler deploy
```

## Domains

`wrangler.jsonc` declares `noriq.dev` and `www.noriq.dev` as custom domains; `wrangler deploy` attaches both to the Worker (the zone must be on the Cloudflare account). The Worker redirects www to the apex.

## SEO

- Full meta/OpenGraph/Twitter tags + JSON-LD in `index.html`; OG image at `public/og.png` (1200×630).
- `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, favicons in `public/icons/` — all generated from `noriq.png`.

## Source design

`design.html` is the original bundled design export this site was ported from; `noriq.png` is the master 1024×1024 logo. Regenerate derived assets from it with ImageMagick if the logo changes.

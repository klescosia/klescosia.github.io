# The Purple Cloud → Quartz install guide (v2)

Autumn-deep rebrand for your Quartz v4 site. v2 adds the editorial layer
(hero, badge, gold highlight, numbered blog list) so the build matches the
brand mockup — not just recolored stock Quartz.

## Files

| This folder | Copy to (in your Quartz repo) | What it does |
|---|---|---|
| `quartz.config.ts` | `quartz.config.ts` (repo root) | `theme.colors` light + dark → autumn-deep. Title → `the purple cloud`. Wires the custom OG card. Fonts + plugins untouched. |
| `custom.scss` | `quartz/styles/custom.scss` | Your Myriad faces kept; adds type scale, title logo mark, homepage hero, badge, mono section labels, numbered list, note cards, 404 styling, links/marks/tags polish. |
| `index.md` | `content/index.md` | Restructured homepage: hero block, lead paragraph, Notes cards, numbered dev.to list. |
| `ogImage.tsx` | `ogImage.tsx` (repo root, next to the config) | Autumn-palette social card rendered per page at build time. |
| `404.tsx` | `quartz/components/pages/404.tsx` | Themed not-found page: floating cloud, brand copy, link home. |
| `static/*` | `quartz/static/` | Favicon, app icons, social fallback (see Icons below). |

## Install

1. Commit first (so you can diff/rollback).
2. Drop the three files into the paths above.
3. `npx quartz build --serve` → open the local preview.

## What changed visually (vs the recolored-only v1)

- **Title** is now the lowercase `the purple cloud` lockup with the cloud mark.
- **Homepage hero**: floating cloud icon, `AWS COMMUNITY BUILDER` pill, a big
  tight headline with a gold marker on “Philippines”, and a larger lead line.
- The default `Kyle Escosia` page-title H1 is hidden *only* on pages that
  contain the hero (via `body:has(.pc-hero)`), so note pages keep their titles.
- **dev.to list** → numbered editorial rows (`01 02 03…`) with hairline rules.
- **Notes** show as a two-up card row linking to your real notes.

## Two dependencies to know

1. **Raw HTML in markdown.** `index.md` uses a few HTML tags (`<div>`, `<span>`,
   `<mark>`, `<h2 class>`). Quartz v4 renders these by default. If you ever see
   the literal tags on the page, your pipeline is stripping HTML — tell me and
   I'll convert the hero to a tiny custom `.tsx` component instead.
2. **Modern CSS** (`:has()`, `color-mix()`). Fine in all current browsers; ask
   if you need a fallback build for older ones.

## Still stock (by design)

The right-rail **Graph View** is empty because your notes don't yet link to each
other — that's content, not theme. Add `[[wikilinks]]` between notes (e.g. link
“data modeling” inside the DW/BI note) and the graph fills in, tinted plum.

## Icons & favicon  (the `static/` folder)

Copy everything in `static/` into `quartz/static/` in your repo:

| File | Size | Use |
|---|---|---|
| `icon.png` | 512² | Favicon + the cloud app icon (plum tile, white cloud). Quartz v4 auto-uses `static/icon.png` as the favicon — dropping it in is all that's needed. |
| `favicon.svg` | vector | Crisp favicon for modern browsers (optional, see snippet). |
| `apple-touch-icon.png` | 180² | iOS home-screen icon. |
| `favicon-32.png` / `favicon-16.png` | 32² / 16² | Classic browser-tab sizes. |
| `icon-mark.png` | 512² | Transparent plum cloud (no tile) — for slides, README, etc. |
| `og-image.png` | 1200×630 | Default social-share card. |

### Favicon wiring (optional, for the SVG + PNG sizes)
Quartz already picks up `icon.png`. To also serve the vector + sized PNGs, add
these to the `<head>` — in `quartz/components/Head.tsx`, just after the existing
`<link rel="icon" …>`:

```tsx
<link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16.png" />
<link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
```

### Social image
The provided `quartz.config.ts` already switches `generateSocialImages` to the
object form and points `imageStructure` at `pcOgImage` (from `ogImage.tsx`), so
every page gets an autumn-palette card with its own title + description. The
static `static/og-image.png` stays as a hand-made fallback (e.g. for the root or
any tool that wants a fixed URL).

If you'd rather use only the one static card: set `generateSocialImages: false`
and add `<meta property="og:image" content="https://esck.dev/static/og-image.png" />`
to `Head.tsx`.

## Natural next steps

- A small custom **PageList/hero `.tsx`** if you want the note cards to carry
  descriptions + tags like the full mockup.
- Wikilinks between notes so the **Graph View** populates.

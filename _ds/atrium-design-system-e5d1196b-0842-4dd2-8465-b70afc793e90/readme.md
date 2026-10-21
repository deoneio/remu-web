# Atrium Design System

A minimal, architectural design language: warm-neutral paper, near-black type, drawn column rules, and arch-masked photography. Lowercase labels, oversized light display type, one black pill per screen.

## Provenance — read this first

This system was derived from **two screenshots of a third-party website** supplied by the user:

- `uploads/Screenshot 2026-09-13 213925.png` — home hero (corner monogram, four lowercase nav labels heading ruled columns, overlapping arch/capsule image columns behind a giant lowercase wordmark, a short strapline bottom-left, then a lead paragraph section).
- `uploads/Screenshot 2026-09-13 214131.png` — footer (full-bleed image band, social row with ↗ links, Fr/En switch, black contact pill, four-up office grid with `voir sur maps ›`, oversized wordmark, micro legal bar).

The user stated explicitly: **this is not their brand and not a site they own** — it was supplied as *stylistic* inspiration only. Therefore:

- The system is named **Atrium**, an invented name. No third-party company name, wordmark, logo, imagery, address or phone number has been reproduced. Sample content in the UI kit is fictional.
- No codebase, Figma file or repository was provided. **Everything here is inferred from two screenshots**, which is lossy: exact paddings, easing curves, breakpoints and hover behaviours are reasoned reconstructions, not measured values. Treat numbers as deliberate system decisions for *Atrium*, not as claims about the reference site.
- No logo file exists. Where a mark would go, the system sets the brand name as type (`Wordmark`) or a two-letter circular monogram (`BrandBadge`). **Do not draw a logo.**

## Products / surfaces

One surface is evidenced: a **public marketing website** for a multidisciplinary architecture group (four practice areas: architecture, interior, healthcare, site supervision; offices in several cities; French-language). That is the single UI kit in `ui_kits/site/`. No app, no docs site, no deck template was provided — none were invented.

## Content fundamentals

**Voice.** Institutional but plain-spoken. The studio speaks as **nous** ("Nous sommes un groupe d'architecture structuré et pluridisciplinaire"). The reader is addressed rarely and never sold to — no "you'll love", no urgency, no exclamation marks.

**Casing.** Almost everything interface-level is **lowercase**: nav items (`architecture`, `intérieur`, `santé`, `chantier`), buttons (`menu`, `nous contacter`), eyebrows (`nous suivre`, `projets récents`), utility links (`mentions légales`, `retour en haut`). Sentence case is used for real sentences and for place names (`Lyon`, `Instagram`, `Fr`/`En`). Never uppercase, never small-caps, never letterspaced tracking-out labels. The mono variant is exempt from the lowercase rule — place names, reference codes and units keep their written casing.

**Punctuation.** Straplines and labels carry no terminal period ("Architectes d'un monde en mouvement"). Body paragraphs are fully punctuated. Addresses separate locality and country with a middot: `69002 Lyon • France`. Phone numbers keep national formatting and spaces: `+33 (0)4 78 92 14 07`. Ranges use an en dash (`2018 — 2026`).

**Length.** Straplines are 4–6 words on a short measure (three words per line). The lead statement is one sentence, 25–40 words, doing all the positioning work. Supporting paragraphs are two or three sentences. Captions are `place · year`.

**Diction.** Concrete and material — *béton, bois massif, verre clair, trame, patio, phasage*. Avoid abstraction ("solutions", "innovant", "durable" as a slogan), avoid superlatives, avoid marketing verbs. Numbers are stated flatly in mono type: `4 200 m²`, `2025`.

**Emoji: never.** Not in UI, not in copy. Arrow glyphs (↗ › ˄) are the only non-alphabetic marks.

**Vibe.** A practice that would rather show a plan than a promise. Quiet, confident, French-institutional; closer to an exhibition catalogue than a SaaS landing page.

## Visual foundations

**Palette.** Two families only. A warm-neutral paper ramp (`--paper-000` #ffffff → `--paper-300` #d4d2cd) and an ink ramp ending in a near-black `--ink-900` #0a0a0a — never pure #000 for large fills, never pure grey-blue. Accent colour does not exist as a brand colour: the only chroma in the system comes from **photography**, abstracted into five tints (`--tint-concrete`, `--tint-glass`, `--tint-timber`, `--tint-clay`, `--tint-moss`) used for image placeholders and letterboxing. At most two background values appear on a page: `--surface-sunken` (#f2f1ef) for the hero band and `--surface-page` (white) for everything below.

**Type.** Display and wordmark in a geometric grotesque at weight **300**, tracked in to −0.045em, leading 0.82 — set lowercase at architectural scale (up to 260px; the footer wordmark is nearly viewport-wide). Text in a neutral grotesque: lead 34/1.16 at a 22–28ch measure, body 15/1.45, small 13/1.4, micro 11/1.36, labels 13px lowercase. Mono only for numerals, areas, coordinates and reference codes. Two weights total (300 display, 400 text) — no bold, no italics.

**Layout.** A 12px page gutter (24px at large sizes) — content sits almost at the edge of the viewport, which is what makes the wordmark feel oversized. The structural grid is **four columns, drawn**: 1px `--line-hairline` rules run full-height from roughly the horizontal midline to the right edge, and the nav labels sit at the top of those columns, indented 12px, reading as column headers rather than a centred menu. Sections are separated by 96–128px of paper and, where needed, a single hairline. Nothing is centred except the footer wordmark.

**Backgrounds.** Flat paper. **No gradients as decoration**, no textures, no patterns, no hand-drawn illustration, no noise. Gradients appear in exactly two roles: image placeholders (a soft diagonal paper→tint blend standing in for missing photography) and protection scrims over media (`--scrim-top`, `--scrim-bottom`). Full-bleed image bands (300–420px tall, square corners, edge to edge) carry the visual weight instead.

**Imagery.** Cool, even, daylight architectural photography — concrete greys and glass greens with warm timber as the only heat. No grain, no filters, no heavy vignette, no people as subject. Two masks only: the **arch** (rounded top, flat base — `--radius-arch`) and the **capsule** (fully rounded — `--radius-capsule`); everything else is a square-cornered band. Arch columns overlap by 18–26px and stagger vertically (±10–34px) so the silhouette is irregular; the wordmark crosses them and always sits on top, fully opaque.

**Corner radii.** Flat by default: `--radius-0` for bands and containers, `--radius-sm` (2px) for specimen chips, `--radius-md` (6px) reserved, `--radius-pill` for buttons and the monogram. Cards, as such, don't exist — content sits directly on paper, separated by rules and space. Where a "card" is needed, it is a hairline-bordered rectangle with no shadow and no fill.

**Shadow / elevation.** Effectively none. `--shadow-none` is the default; `--shadow-pill` (1px, 8% ink) is permitted under a pill floating on imagery and `--shadow-float` under a true overlay. Depth is communicated by overlap and scale, never by shadow.

**Transparency & blur.** Rare and purposeful: a scrim only when type sits on a photograph, `--veil-light` for a light panel over imagery, `--blur-veil` only behind a fixed element crossing media. Text is never set in a translucent colour — ink is always full opacity.

**Animation.** Slow and unsprung. `--ease-out-expo` (cubic-bezier .16,1,.3,1) for reveals at 640–900ms; `--ease-standard` for colour and opacity at 320ms; hover transitions at 160ms. Media reveals are mask/clip and scale, text enters with a short upward translate plus fade, staggered ~60ms. **No bounce, no spring, no parallax carousels, no scroll-jacking**, and `prefers-reduced-motion` collapses everything.

**Hover.** Links and labels fade to **55% opacity** (`--hover-opacity`) and their trailing arrow nudges 1–2px in its own direction — no colour change, no underline appearing. The solid pill darkens from `--ink-900` to `--ink-700`. Images scale 1.03 inside a fixed mask over 640ms. Index rows dim their *siblings* to 45% rather than highlighting themselves.

**Press.** No transform, no scale-down, no shadow change — the fill simply holds its hover value. Restraint is the point.

**Active / selected.** A 1px `--line-strong` underline 2–3px below the baseline (the Fr/En switch, index filters). Never a pill, never a background chip.

**Borders.** 1px, one of three values: `--line-hairline` (structure, dividers), `--line-rule` (outlined controls), `--line-strong` (active state). No 2px borders, no coloured borders, and never a coloured left-border accent.

**Focus.** 1px solid ink outline at 2px offset — visible, unstyled, honest.

## Iconography

**There is no icon set in the source, and none has been invented.** The reference interface is icon-free; its entire "icon system" is typographic:

- `↗` (U+2197) outbound links — Instagram, LinkedIn
- `›` (U+203A) forward / map / detail links and the primary pill
- `˄` / `˅` (U+02C4 / U+02C5) back-to-top and disclosure
- `•` (U+2022) separator inside addresses

These render in the text font at the link's own size, inherit `currentColor`, and are produced by `ArrowLink` and `Button`'s `icon` prop. No icon font, no sprite sheet, no SVG icon files exist in this system — **do not add hand-drawn SVG icons.** Emoji are never used; no PNG icons are used.

If a future surface genuinely needs pictographic icons (a settings panel, a file list), link **Lucide** from CDN at 1.25px stroke, 20px box, `currentColor` — that is the nearest match to this system's hairline weight, and it is a flagged substitution, not something observed in the source.

**Assets.** `assets/` contains no logo and no photography, by design: the source is a third party's brand and imagery. Image slots render the system's tinted placeholder until real photography is supplied.

## Substitutions to resolve

- **Fonts.** The reference uses licensed grotesques we have no binaries for. Loaded substitutes (Google Fonts, via `tokens/fonts.css`): **Manrope** 300 for display/wordmark, **Schibsted Grotesk** for text/UI, **JetBrains Mono** for numerals. Supply real font files and we'll swap in local `@font-face` rules.
- **Photography.** None available; all media is placeholder.

## Index

Root
- `styles.css` — the single entry point consumers link (`@import`s only)
- `readme.md` — this guide · `SKILL.md` — portable agent skill · `thumbnail.html` — homepage tile
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `motion.css`, `elevation.css`, `base.css`
- `guidelines/` — 20 specimen cards (Colors, Type, Spacing, Shape, Motion, Brand)
- `assets/` — see note above (intentionally without a logo)

Components — `components/<group>/<Name>.{jsx,d.ts,prompt.md}`, one `@dsCard` HTML per group
- `core/` — **Button**, **ArrowLink**, **Label**, **LangToggle**, **BrandBadge**
- `media/` — **ArchMedia**, **ArchCluster**, **MediaBand**
- `layout/` — **NavBar**, **ColumnRules**, **Wordmark**, **Statement**, **AddressBlock**, **Footer**

**Intentional additions** (no direct counterpart in the two screenshots, added because the vocabulary requires them): `ColumnRules` (the ruled grid is visible but wasn't a nameable component), `Statement` (the hero strapline and lead paragraph share one type role), `ArchCluster` (the hero motif as a single composition), `BrandBadge` (stands in for the absent logo), `MenuOverlay` in the UI kit (the `menu` pill implies a destination the screenshots don't show).

UI kits
- `ui_kits/site/` — marketing site: `index.html` (click-through), `Home.jsx`, `Projects.jsx`, `Project.jsx`, `Studio.jsx`, `Chrome.jsx`, `data.js`, `README.md`

Templates
- `templates/site-page/SitePage.dc.html` — the marketing page as a copyable starting template (nav + ruled hero + statement + project grid + footer), with `ds-base.js` loading this system's CSS and bundle.

No slide template was provided, so no sample slides exist.

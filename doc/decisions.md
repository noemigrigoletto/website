# Decisions

Last reviewed: 2026-09-18.

## Product and content

- The site is entirely in Italian. Technical documentation and code may be in English.
- The five top-level pages are fixed: Home, Chi sono, Di cosa mi occupo, Consulenze, and Contattami.
- The clean routes are `/`, `/chi-sono`, `/di-cosa-mi-occupo`, `/consulenze`, and `/contattami`.
- The shared menu links to Home, Educazione alimentare, Percorso nutrizionale, and Contattami. La mia missione is part of the homepage content.
- The current Noemi Grigoletto website is the primary content source. Rewriting may improve clarity and warmth but must preserve meaning and professional scope.
- Do not invent qualifications, services, medical claims, clinic addresses, prices, published testimonials, statistics, memberships, certifications, outcomes, or legal claims.
- The homepage may temporarily show fictional review copy for layout evaluation only. Every example must be visibly labelled as fictional and replaced with genuine, approved feedback before publication.
- No clinic address is published. The wording may state that consultations are available online or in an outpatient setting without naming a location.
- The verified degree institution is the University of Padua.
- Social links are limited to Instagram and Facebook. Threads is intentionally omitted.
- The booking CTA links directly to `https://form.jotform.com/240092101421033`.
- Contact details and external URLs are centralized in `src/data/site.ts`.

## Visual direction

- The identity combines a warm editorial character with a clean professional service structure.
- The palette follows Noemi's preferred warm reference: ivory, blush, biscuit, caramel, muted terracotta, and dark cocoa. Green is excluded from the site interface and decorative surfaces.
- The approved type direction combines Simonetta for the main hero and expressive statements, Droid Serif for section headings, Open Sans for body and interface text, and Shrikhand only for small section labels. Droid Serif is self-hosted from the official Google Fonts file. Dreaming Outloud Script requires a commercial webfont license and remains unavailable until licensed files are supplied.
- Section labels use natural Italian capitalization rather than forced uppercase styling.
- Gradients are restrained to soft cream, blush, caramel, and biscuit transitions on key editorial surfaces rather than used throughout every component.
- Rounded forms are welcome, but should remain calmer and more restrained than the earlier demo website.
- Service summaries use uniform line symbols rather than numbers or individually coloured cards.
- The original mark created by Noemi and the portrait supplied on 2026-09-18 are approved project assets. The web portrait is converted to WebP with camera and location metadata removed.
- The portrait is the primary human visual; the mark supports the typographic brand rather than dominating it.
- Prefer generous whitespace, restrained organic decoration, limited card use, and strong hierarchy.
- Avoid green interface colors, a clinical blue-and-white aesthetic, generic SaaS styling, carousels, excessive gradients, heavy animation, and medical stock-photo clichés.

## Architecture

- The output remains fully static.
- Astro components provide the shared shell and reusable sections; client-side JavaScript should remain minimal.
- Tailwind CSS 4 is integrated through the official Vite plugin. Design tokens and reusable global rules live in `src/styles/global.css`.
- Shared site data is typed and data-driven where repetition warrants it, without introducing a CMS or unnecessary abstractions.
- Metadata is provided through `src/layouts/BaseLayout.astro`.
- Accessibility includes semantic landmarks, a skip link, visible focus states, native mobile navigation, meaningful alternative text, and reduced-motion support.

## Delivery boundaries

- GitHub Pages is the intended hosting target for the website at `noemigrigoletto.com`. The GitHub Actions workflow builds and deploys the static output; configuring Pages and DNS remains a separate operational step. AWS infrastructure remains outside ordinary website feature work.
- Infrastructure source already exists in the repository, but live infrastructure mutation is prohibited.

## Homepage typography

- Use Poppins and Lora for the homepage reference-inspired design; these are the typefaces identified in the supplied PDF. Use Lora Italic for the page titles of Educazione alimentare, Percorso nutrizionale personalizzato, and Come si svolge.

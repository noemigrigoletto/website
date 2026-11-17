# Project state

Last verified: 2026-09-18.

## Current implementation

- The homepage has a reference-inspired beige and brown redesign under review. Keep its existing copy; extend the approved direction to the shared navigation and remaining pages after homepage feedback.


- The original Astro starter has been replaced with a custom static site foundation.
- The shared header, desktop navigation, native mobile navigation, footer, buttons, section headings, contact CTA, metadata layout, design tokens, and responsive rules are implemented.
- The homepage incorporates the first design-feedback round: revised hero message, rounder typography, icon-only quick contacts, a single-column mission section, symbolic service cards, and clearly labelled fictional review placeholders.
- Noemi's original mark and the newly supplied portrait are stored locally in `public/images/`. The portrait is a metadata-free, web-optimized WebP file.
- Contact details, booking URL, social links, and downloadable resource URLs are typed and centralized in `src/data/site.ts`.
- Navigation is centralized in `src/data/navigation.ts`; service summaries and journey steps are in `src/data/services.ts`.

## Page status

| Route | State |
| --- | --- |
| `/` | Homepage implemented; awaiting or incorporating design feedback before final sign-off. |
| `/chi-sono` | Review placeholder only; final page still required. |
| `/di-cosa-mi-occupo` | Education page draft with individual, workshop and company training sections. |
| `/consulenze` | Consultation page draft with the nutritional journey, visit preparation and follow-ups. |
| `/contattami` | Review placeholder only; final page still required. |

The placeholder pages deliberately use `noindex` until their final content is implemented.

## Verified source details

- Email: `dietista@noemigrigoletto.com`
- Telephone: `+39 349 241 8586`
- Booking: `https://form.jotform.com/240092101421033`
- Instagram: `https://www.instagram.com/dietistanoemigrigoletto/`
- Facebook: `https://www.facebook.com/profile.php?id=61555231928379`
- First visit: approximately one hour.
- Follow-up visit: approximately thirty minutes.
- Personalized plan: normally sent by email within five working days.
- Downloadable resources: medical referral example and food diary, linked from Google Drive in `src/data/site.ts`.

## Known placeholders and remaining work

- Review the homepage updates from the 17 November meeting, including the approximate patient count and wording of training and services. The master title and food imagery remain to be defined.
- Obtain homepage feedback on the revised design, including the proposed review layout.
- Replace the fictional review placeholders with genuine, explicitly approved testimonials before publication, or remove the section.
- Complete Chi sono and Contattami and review the new education and consultation pages.
- Replace `public/images/social-preview-placeholder.svg` with a final approved social preview asset.
- Remove `noindex` from each remaining page when it is complete.
- Re-run route, responsive, keyboard-navigation, link, build, and Astro checks after each page group.

## Repository boundaries

- `.github/workflows/` and `infrastructure/` exist but are not part of ordinary website implementation work.
- `dist/`, `.astro/`, and `node_modules/` are generated or local working directories and are not sources of truth.

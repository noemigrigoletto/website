# Technical baseline

Last registry verification: 2026-09-18.

## Supported stack

| Tool | Project version | Latest checked | Decision |
| --- | ---: | ---: | --- |
| Astro | `7.3.3` | `7.3.3` | Current stable release. |
| Tailwind CSS | `4.3.3` | `4.3.3` | Current stable release. |
| Tailwind Vite plugin | `4.3.3` | `4.3.3` | Current stable release and Astro's recommended Tailwind 4 integration. |
| `@astrojs/check` | `0.9.10` | `0.9.10` | Current stable release. |
| TypeScript | `6.0.3` | `7.0.2` | Keep 6.0.3: `@astrojs/check` 0.9.10 declares support for TypeScript 5 and 6, not 7. |

Version checks used official npm registry metadata. The dependency lockfile was refreshed, compatible audit fixes were applied, and `npm audit` reported zero known vulnerabilities at the time above.

## Runtime

- `package.json` requires Node.js `>=22.12.0`, matching Astro 7's engine requirement.
- The local verification environment used Node.js `25.5.0` and npm `11.8.0`.
- Do not raise the minimum Node version without a concrete feature or support requirement.

## Current best-fit approach

- Static generation is appropriate because the site contains stable professional and service content and does not require authenticated or personalized server behavior.
- Astro components give reusable structure without shipping a client framework.
- Tailwind 4 via `@tailwindcss/vite` is the supported integration path for modern Astro versions.
- Native HTML (`details`/`summary`) provides the current mobile menu interaction with no client bundle.
- Local image assets avoid relying on fragile third-party image URLs at runtime.
- A small typed data layer is sufficient; a CMS is not currently justified.

## Upgrade policy

1. Check official release notes, engine requirements, and peer dependencies.
2. Prefer the latest mutually compatible stable versions.
3. Update direct dependencies and the lockfile together.
4. Run `npm audit`, `npm run check`, and `npm run build`.
5. Perform responsive browser checks after Astro, Tailwind, or CSS-tooling changes.
6. Update this document when the supported baseline or an important compatibility constraint changes.

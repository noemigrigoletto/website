# Development workflow

## Setup

```sh
npm install
```

## Development server

Use Astro's background server for this repository:

```sh
npx astro dev --background
```

Check, inspect, and stop it with:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Do not leave the server running after a task unless a live preview is being handed to the user.

## Required verification

```sh
npm run check
npm run build
```

For visual or navigation changes, also verify:

- small and large mobile layouts;
- tablet, laptop, and wide desktop layouts;
- no horizontal scrolling;
- keyboard access and visible focus states;
- mobile-menu opening and navigation;
- all five internal routes;
- `mailto:` and `tel:` actions;
- booking and social destinations;
- consistent contact details from `src/data/site.ts`.

## Content editing map

- Contact details, booking, social links, resources: `src/data/site.ts`
- Main navigation: `src/data/navigation.ts`
- Homepage service summaries and journey steps: `src/data/services.ts`
- Shared metadata and document shell: `src/layouts/BaseLayout.astro`
- Design tokens and global component styles: `src/styles/global.css`
- Homepage composition and homepage-only styles: `src/pages/index.astro`

## Dependency maintenance

Use registry and official documentation checks before upgrades. A useful read-only starting point is:

```sh
npm outdated
npm audit
```

Do not upgrade across a major compatibility boundary without checking peer dependencies and release guidance.

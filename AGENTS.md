# Project agent guidance

These instructions apply only to this repository.

## User guidance and project memory

- Treat durable guidance from the user as project knowledge.
- When the user gives new durable project-specific guidance, update this file or the relevant file in `doc/` during the same task unless the user says not to.
- Keep project documentation concise, current, and useful to the next contributor or agent.
- The public website content remains Italian.

## Git authorization

- The user has stated that normal Git edits are welcome in this repository.
- The global `~/.codex/AGENTS.md` rule still requires explicit, immediate approval before each mutating Git command. This project preference must not be treated as blanket approval that bypasses that rule.
- Keep Git actions scoped to the current request. Never discard or overwrite unrelated user changes.
- Prefer small, reviewable commits when the user asks for commits. Do not commit, push, create branches, or open pull requests unless doing so is useful to the requested workflow.
- Destructive or broad operations still require care: resolve exact targets first and do not use `git reset --hard`, destructive checkout/restore, or `git clean` unless the user specifically requests that outcome.

## Engineering principles

- Follow YAGNI, KISS, and DRY.
- Implement the smallest correct solution that fits the existing architecture.
- Keep the site fully static, semantic, accessible, and mostly JavaScript-free.
- Use Astro components and TypeScript where they add clear value. Do not add React or another UI framework without a demonstrated interactive need.
- Centralize shared content such as contact details and external URLs in typed data files.
- Preserve Italian grammar and the verified professional scope. Do not invent claims, credentials, prices, addresses, testimonials, or outcomes.

## Dependencies and current practices

- Before adding or upgrading a framework, integration, or major tool, verify the latest stable release and current setup guidance using its official documentation or registry metadata.
- Prefer the latest stable version that is compatible with the rest of the toolchain; do not force an incompatible major version merely because it is newer.
- Record material dependency or architecture decisions in `doc/decisions.md` and update `doc/state-of-the-art.md` when the technical baseline changes.
- Install dependencies only when they provide clear value. Prefer Astro, Tailwind, CSS, and native HTML capabilities.

## Subagents

- Subagents may be used when parallel work will materially reduce time or cost.
- Keep work local when delegation would add more coordination than value.

## Development server

Start the Astro development server in background mode:

```sh
npx astro dev --background
```

Manage it with:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Do not leave project processes running after the task unless the user needs the local preview.

## Quality gates

For source or dependency changes, run the relevant checks before reporting completion:

```sh
npm run check
npm run build
```

Also verify affected routes and responsive behavior when presentation or navigation changes. Do not claim a check was performed unless it was actually run.

## Project scope

- The website uses Astro, TypeScript, Tailwind CSS, reusable Astro components, and static generation.
- The public site and navigation remain in Italian.
- Preserve exactly these top-level pages: Home, Chi sono, Di cosa mi occupo, Consulenze, Contattami.
- Hosting, CI/CD, AWS, and infrastructure are outside ordinary website feature work unless the user explicitly brings them into scope.
- Live infrastructure and cloud resources must never be mutated by the agent. Infrastructure source may be inspected or edited and validated locally when explicitly requested.

## Documentation

Project documentation lives in `doc/`:

- `doc/README.md`: documentation index
- `doc/decisions.md`: durable product and technical decisions
- `doc/project-state.md`: current implementation status and open work
- `doc/state-of-the-art.md`: verified technical baseline and compatibility notes
- `doc/workflow.md`: local development and verification workflow

Useful official Astro guides:

- Full documentation: https://docs.astro.build
- Routing: https://docs.astro.build/en/guides/routing/
- Components: https://docs.astro.build/en/basics/astro-components/
- Framework components: https://docs.astro.build/en/guides/framework-components/
- Content collections: https://docs.astro.build/en/guides/content-collections/
- Styling and Tailwind: https://docs.astro.build/en/guides/styling/
- Internationalization: https://docs.astro.build/en/guides/internationalization/

# Important Files

This file tracks important files in the project that should be included in every chat.

## Instructions

- `.vscode/rules/important-files.instructions.md` - This file, containing reference to project structure and important files.
- `.vscode/rules/code-standards.instructions.md` - Code standards and general rules for the project.
- `.vscode/rules/design-system.instructions.md` - General design system and guidelines for the project.

These file can an need to be followed and updated when needed by user and assistant alike.

## Core Configuration Files

- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `postcss.config.js` - PostCSS configuration for Tailwind CSS
- `eslint.config.mjs` - ESLint configuration
- `.gitignore` - Git ignore rules
- `.env` - Environment variables (not committed)
- `.env.example` - Example environment file
- `pnpm-lock.yaml` - PNPM lock file

## Source Code

- `src/app/*` - Next.js app directory
- `src/types/*` - TypeScript type definitions
- `src/components/*` - Shared components. Organized by feature/domain where possible (e.g., `projects`, `skills`).
- `src/components/ui/*` - shadcn/ui atomic building blocks (do not add custom components here manually)
- `src/components/blocks/*` - Major page section components (e.g., Navbar, Hero, Projects, Skills, Footer, Contact)
- `src/components/projects/*` - Components related to the projects feature
- `src/components/skills/*` - Components related to the skills feature
- `src/data/*` - Data files for skills, meta, socials and projects configuration
- `src/hooks/*` - Custom hooks
- `src/lib/*` - local libraries and utilities
- `src/lib/github/*` - GitHub API helpers
- `src/schemas/*` - Zod schemas for form validation
- `src/app/api/contact` - API route for contact form, validates and sends email via Nodemailer
- `src/data/locales/<locale>.json` - Localization files. Page section keys (e.g., hero) are nested under `content.<section>`. Use this convention for all new localizable sections.

## Documentation

- `README.md` - Project documentation
- `.vscode/rules/*.md` - Cursor rules and standards

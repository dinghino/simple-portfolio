# Important Files

This file tracks important files in the project that should be included in every chat.

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
- `src/components/*` - Other shared components
- `src/components/ui/*` - shadcn/ui atomic building blocks (do not add custom components here manually)
- `src/components/sections/*` - Section components (Navbar, Hero, Projects, Skills, Footer, Contact)
- `src/data/*` - Data files for skills, meta, socials and projects configuration
- `src/hooks/*` - Custom hooks
- `src/lib/*` - local libraries and utilities
- `src/lib/github/*` - GitHub API helpers
- `src/schemas/*` - Zod schemas for form validation
- `src/app/api/contact` - API route for contact form, validates and sends email via Nodemailer

## Documentation

- `README.md` - Project documentation
- `.vscode/rules/*.md` - Cursor rules and standards

## Build and Cache

- `.next/*` - Next.js build output
- `node_modules/*` - Project dependencies

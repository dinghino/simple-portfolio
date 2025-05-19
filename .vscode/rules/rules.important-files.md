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
  - `globals.css` - Global styles and Tailwind CSS configuration
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component
- `src/types/*` - TypeScript type definitions (barrel exported via index.ts)
- `src/components/sections/*` - Section components (Navbar, Hero, Projects, Skills, Footer, Contact)
- `src/components/sections/projects.tsx` - Projects section component
- `src/components/ui/*` - shadcn/ui atomic building blocks (do not add custom components here manually)
- `src/components/*` - Other shared components
- `src/data/*` - Data files (barrel exported via index.ts)
- `src/data/repositories/` - Project repository data
- `src/data/projects.ts` - Project and repository data
- `src/data/skills.ts` - Skills data
- `src/data/socials.ts` - Social media links
- `src/data/meta.ts` - Site meta info
- `src/hooks/*` - Custom hooks (barrel exported via index.ts)
- `src/lib/*` - Utilities (barrel exported via index.ts)
- `src/lib/github/*` - GitHub API helpers (barrel exported via index.ts)
- `src/lib/github/api.ts` - GitHub API wrapper
- `src/lib/github/adapter.ts` - GitHub to Project adapter
- `src/components/project-card/contact-form.tsx` - Contact form component
- `src/components/sections/contact.tsx` - Contact section
- `src/components/sections/footer.tsx` - Footer section
- `src/components/project-card/social-button.tsx` - Social button shared component
- `src/data/contact.ts` - Centralized contact and socials data
- `src/schemas/contact-form.ts` - Contact form schema and types

## Documentation

- `README.md` - Project documentation
- `.vscode/rules/*.md` - Cursor rules and standards

## Build and Cache

- `.next/*` - Next.js build output
- `node_modules/*` - Project dependencies

## Coding Standards
- Always use the `cn` utility from `lib/utils` for class merging, especially when using `cva` for variants.

---
applyTo: '**/*.{ts,tsx}'
---


# Code Standards and Rules

- Do not assume. In case of doubt or options ask the team.
- twitter does not exists anymore. it is called `X` now. icons and links should be updated accordingly.
- it is ok to use `twitter` internally in keys and variables, but the UI should always use `X`.
- Use `pnpm` for package management.
- we are in Next.JS. use `Link` from `next/link` instead of `a` elements.
- All internal navigation links must use the Next.js `Link` component from `next/link` (never use `<a>` for internal links).
- GSAP is fully open source (FOSS). [See documentation.](https://gsap.com/docs/v3/)
- For GSAP usage in React, always use the official `useGSAP` hook for animation lifecycle management. [See React guide.](https://gsap.com/resources/React/)

## TypeScript and React Standards

1. **Component Structure**
   - Use functional components exclusively
   - Extract types for all functions and data structures
   - Prefer passing typed objects instead of individual parameters
   - Keep components small and focused on a single responsibility
   - components should have their own folder with an `index.ts` file for barrel exports
   - Use `React.FC` for functional components
   - use `class-variance-authority` for variants and always use the `cn` utility from `lib/utils` for class name merging (do not use `clsx` or `twMerge` directly)
   - do NOT use ternary operators for class names

2. **Type Definitions**
   - Define types in separate files under `src/types/`
   - Use TypeScript interfaces for object shapes
   - Use type aliases for complex types
   - Export types that are used across multiple files

3. **Documentation**
   - Use JSDoc comments for all functions and components
   - Include TypeScript type information in JSDoc
   - Document complex business logic with inline comments
   - Keep documentation up to date with code changes

4. **Code Organization**
   - Group related components in feature folders (domain-driven organization when possible, e.g., `src/components/projects`, `src/components/skills`).
   - Use a domain driven approach to scope business logic elements
   - Keep utility functions in `src/lib/`
   - Use barrel exports (index.ts) for clean imports, including types and components
   - Follow consistent file naming conventions
   - Prefer lowercase and dash-case for file names
   - Prefer usage of utilities and existing libraries
   - Use of ternary operators for css classes is discouraged
   - keep components small and focused on a single responsibility
   - create sub components and reusable parts when needed and possible
   - Extract props, params and return types into their own types instead of defining them inline

5. **State Management**
   - Use React hooks for local state
   - Keep state as close as possible to where it's used
   - Use context for global state when necessary
   - Document state management patterns

6. **Testing**
   - Write unit tests for utility functions
   - Write component tests for complex UI logic
   - Use meaningful test descriptions
   - Follow the Arrange-Act-Assert pattern

7. **Component Library**
   - The `components/ui` folder is reserved for the shadcn component library and should only contain building blocks and atomic components. Do not add custom components here manually.
   - Use lowercase and dash-case for all file names, including components and data files.
   - All major folders (data, hooks, lib, lib/github, components/ui, types) must have an `index.ts` for barrel exports.
   - to add new shadcn components use `pnpm dlx shadcn@latest add <component-name>` instead of manually writing it.

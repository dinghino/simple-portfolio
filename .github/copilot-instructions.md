# Instructions entrypoint

## Rules files

All rules to be followed are listed here. The assistant will follow these rules when generating code.

- `.vscode/rules/tasks.instructions.md` - Short term tasks to execute. keep updated with the current tasks to be done
- `.vscode/rules/code-standards.instructions.md` - Code standards and conventions
- `.vscode/rules/design-system.instructions.md` - Design system and concepts to follow when implementing new components
- `.vscode/rules/important-files.instructions.md` - Important files to be aware of

These files should be referenced when applying changes to the codebase.

- update the rules files when needed, either prompted by the user or when you see a need for it


## Basic info

- next.js 15+ with app router
- tailwindcss, clsx and twmerge through @/lib/utils `cn`
- class-variance-authority for variants

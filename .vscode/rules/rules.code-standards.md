# Code Standards and Rules

- Do not assume. In case of doubt or options ask the team.

## TypeScript and React Standards

1. **Component Structure**
   - Use functional components exclusively
   - Extract types for all functions and data structures
   - Prefer passing typed objects instead of individual parameters
   - Keep components small and focused on a single responsibility

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
   - Group related components in feature folders
   - Use a domain driven approach to scope business logic elements
   - Keep utility functions in `src/lib/`
   - Use barrel exports (index.ts) for clean imports
   - Follow consistent file naming conventions
   - prefer dash-case for file names
   - prefer usage of utilities and existing libraries
   - use of ternary operators for css classes is discouraged

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

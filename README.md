# Urrepo

Urrepo is a monorepo template built for projects that need consistency and organization. It uses a set of modern tools to make working with multiple packages straightforward and predictable.

## Rationale

Most existing monorepo solutions, like **Nx** and **Turborepo**, are designed with enterprise use cases in mind, introducing unnecessary complexity and vendor lock-in. These tools often:

- **Abstract too much**: They introduce proprietary configurations and wrapper commands that make it harder to understand what’s actually happening under the hood.
- **Encourage heavy dependencies**: Many setups include caching servers, remote execution layers, and proprietary features that aren’t necessary for most projects.
- **Are built for commercial gain**: Turborepo, for example, started as an open-source project but quickly introduced paid features, making companies dependent on Vercel’s infrastructure.
- **Follow a “batteries-included” approach**: Many tools try to automate everything, reducing the need for developers to configure their monorepo explicitly. While this can be useful for large teams, it often results in a lack of flexibility and forces developers into rigid workflows.

Urrepo exists because **monorepos don’t need to be complicated**. It provides a lightweight, dependency-free alternative that leverages native tooling like **pnpm workspaces, TypeScript project references, and Wireit**. This makes it:

- **Transparent**: No black-box abstractions—everything works with standard npm scripts and TypeScript.
- **Fast**: Uses incremental builds and caching without requiring external services.
- **Flexible**: No vendor lock-in, no hidden magic—just a clean setup that works with any CI/CD pipeline.
- **Explicit and Developer-Oriented**: Instead of hiding configuration behind proprietary CLI commands, Urrepo ensures that every dependency and automation step is clearly defined, improving maintainability.

### Trade-offs

Urrepo does not abstract many things, which means some manual setup is required. Unlike Nx or Turborepo, which try to automate monorepo management entirely, Urrepo keeps things explicit, allowing for greater control and understanding:

- **TypeScript References**: Each new package must be manually added as a `reference` in the root `tsconfig.json` to ensure project-wide type safety.
- **Wireit Dependencies**: Since Wireit doesn’t scan the monorepo automatically, dependencies between packages need to be explicitly defined in the root `package.json`. This ensures predictability over auto-discovery mechanisms used in some tools.
- **Vitest Workspaces**: Unlike Nx or Turborepo, which abstract test execution across the monorepo, Urrepo **leverages** Vitest workspaces to ensure efficient test execution while keeping configuration clear.

While this means more manual setup, it also means you **understand exactly how your monorepo is structured**. Nothing is hidden behind custom CLIs or obscure configurations.

## Features

- **TypeScript Project References**: Every package extends a shared `tsconfig.base.json` and uses `composite: true` for incremental builds.
- **Wireit for Automation**: Handles dependencies and caching for scripts like building, testing, and linting.
- **Centralized ESLint and Prettier Configs**: The `@urrepo/eslint-config` package provides a reusable setup for linting and formatting.
- **Testing with Vitest 3**: Thanks to **Vitest’s built-in monorepo support**, tests run efficiently across packages while keeping configurations explicit.
- **Pnpm Workspaces**: Keeps dependencies organized and ensures easy linking across packages.
- **Catalog Dependencies**: Ensures consistent versions of dependencies by referencing a shared `catalog` in `pnpm-workspace.yaml`.

## Getting Started

### Adding a New Package

1. **Create the Package**:

   - Add a new folder under `packages/`.
   - Create a `package.json` file with the necessary metadata and dependencies.

2. **Set Up TypeScript**:

   - Add a `tsconfig.json` that extends the root `tsconfig.base.json`.
   - Set `composite: true` in the `compilerOptions`.
   - Add a reference to the new package in the root `tsconfig.json`.

3. **Set Up Linting and Formatting**:

   - Add an `eslint.config.js` file and extend `@urrepo/eslint-config`.

4. **Use Catalog for Dependencies**:

   - For shared tools or libraries, use `catalog:` in `package.json` to ensure consistent versions.

5. **Define Wireit Scripts**:

   - Add `wireit` configuration in the `package.json` for `build`, `test`, `lint`, and `format` scripts.

### Scripts

| Command           | Description                             |
| ----------------- | --------------------------------------- |
| `pnpm build:all`  | Builds all packages using `wireit`.     |
| `pnpm test:all`   | Runs tests for all packages.            |
| `pnpm lint:all`   | Lints all packages.                     |
| `pnpm format:all` | Formats all packages.                   |
| `pnpm clean`      | Removes all `node_modules` directories. |

### Directory Structure

```plaintext
/
├── packages/
│   ├── eslint-config/       # Shared ESLint configuration
│   └── preset/              # PandaCSS preset package
├── tsconfig.base.json       # Shared TypeScript configuration
├── tsconfig.json            # Root TypeScript configuration with references
├── prettier.config.js       # Shared Prettier configuration
├── pnpm-workspace.yaml      # Pnpm workspace configuration
├── vitest.config.ts         # Root Vitest configuration
```

## Tools and Technologies

- **TypeScript**: Provides type safety and improves code quality.
- **Wireit**: Automates script dependencies and enables caching for builds and tests.
- **ESLint and Prettier**: Keeps code consistent and clean.
- **Vitest 3**: A fast and lightweight testing framework with built-in monorepo support.
- **Pnpm**: Manages dependencies and workspaces efficiently.
- **PandaCSS**: A utility-first CSS framework for design tokens and styling.
- **Volta**: Ensures that all contributors use the same Node.js and package manager versions, reducing environment inconsistencies.

## Configuration Summary

### TypeScript

- Extend `tsconfig.base.json` in all package `tsconfig.json` files.
- Use `composite: true` for incremental builds.
- Manually add new package references to the root `tsconfig.json`.

### Wireit

- Add `wireit` configuration in `package.json` for script automation.
- Define `files` and `output` properties for caching and incremental builds.
- Manually add dependencies between packages in the root `package.json`.

### Prettier

- Shared configuration is located in `prettier.config.js`.
- Ignore patterns are defined in `.prettierignore`.

### ESLint

- Uses **Flat Config**, the new recommended `ESLint` configuration format.
- The `@urrepo/eslint-config` package provides a shared configuration.
- Includes **TypeScript-ESLint** for static type-aware linting.
- Configures **Vitest's ESLint rules** to enforce best practices in test files.

### Vitest

- Uses **Vitest 3**, which includes **first-class support for monorepos**.
- Each package should have its own **vitest.config.ts** file.
- Use `defineProject` instead of `defineConfig` to avoid workspace conflicts.

### Volta

- Ensures that all developers use the same versions of **Node.js** and **pnpm**.
- Defined in `package.json` under the `volta` key.
- No need for manual setup—simply install [Volta](https://volta.sh/) and run **pnpm install**.

---

The key takeaway is that Urrepo does not assume how you want to structure your monorepo. Instead, it gives you the tools to configure it explicitly, making it a good choice for developers who value clarity over automation.

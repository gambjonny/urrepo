# Urrepo

Urrepo is a monorepo template built for projects that need consistency and organization. It uses a set of modern tools to make working with multiple packages straightforward and predictable.

## Features

- **TypeScript Project References**: Every package extends a shared `tsconfig.base.json` and uses `composite: true` for incremental builds.
- **Wireit for Automation**: Handles dependencies and caching for scripts like building, testing, and linting.
- **Centralized ESLint and Prettier Configs**: The `@urrepo/eslint-config` package provides a reusable setup for linting and formatting.
- **Testing with Vitest**: Each package has its own `vitest.config.ts` and leverages Vitest workspaces to efficiently run tests across multiple packages in the monorepo.
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
- **Vitest**: A fast and lightweight testing framework.
- **Pnpm**: Manages dependencies and workspaces efficiently.
- **PandaCSS**: A utility-first CSS framework for design tokens and styling.

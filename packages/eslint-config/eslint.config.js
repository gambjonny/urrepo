import eslintjs from '@eslint/js'
import eslintts from 'typescript-eslint'
import vitest from '@vitest/eslint-plugin'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default eslintts.config(
  {
    name: 'global ignore',
    ignores: ['**/coverage/', '**/dist/', '**/*.md'],
  },
  eslintjs.configs.recommended,
  eslintts.configs.strictTypeChecked,
  eslintts.configs.stylisticTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [eslintts.configs.disableTypeChecked],
  },
  prettier,
  {
    name: 'vitest',
    files: ['**/*.test.ts', '**/*.spec.ts'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.all.rules,
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
  {
    name: 'prettier',
    files: ['**/*.{js,jsx,ts,tsx,md}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
)

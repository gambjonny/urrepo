import eslintjs from '@eslint/js'
import eslintts from 'typescript-eslint'
import vitest from '@vitest/eslint-plugin'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default eslintts.config(
  {
    name: 'global ignore',
    ignores: ['**/coverage/', '**/dist/', '**/styled-system/'],
  },
  eslintjs.configs.recommended,
  comments.recommended,
  eslintts.configs.strictTypeChecked,
  eslintts.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [eslintts.configs.disableTypeChecked],
  },
  prettier,
  {
    name: 'ts',
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
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

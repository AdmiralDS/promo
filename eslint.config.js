import { configs, parser } from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';
import svelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';

// Временный блок для мягкого перехода.
// Для новых проектов: все правила из этого блока должны быть выставлены в `error`.
const SOFT_MIGRATION_RULES = {
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-empty-object-type': 'warn',
  // Note: you must disable the base rule as it can report incorrect errors
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'warn',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-dynamic-delete': 'warn',
};

const SVELTE_OVERRIDES = {
  files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
  languageOptions: {
    parserOptions: {
      projectService: true,
      extraFileExtensions: ['.svelte'],
      parser,
      svelteConfig,
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-import-type-side-effects': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
  },
};

export default defineConfig([
  ...configs.strict,
  importPlugin.flatConfigs.recommended,
  ...svelte.configs.recommended,
  {
    rules: {
      'import/no-named-as-default': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'warn',
      'prettier/prettier': 'error',
      'import/no-cycle': ['error', { ignoreExternal: true }],
      'import/no-duplicates': ['error', { considerQueryString: true }],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      ...SOFT_MIGRATION_RULES,
    },
    settings: {
      'import/ignore': ['.(scss|less|css)$'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
      },
      'import/resolver': {
        typescript: {},
      },
    },
    ignores: [
      'scripts/**',
      '*.svg',
      'dist/**',
      'docs/**',
      'node_modules/**',
      '.svelte-kit/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
  SVELTE_OVERRIDES,
  eslintPluginPrettierRecommended,
]);

/* eslint-disable */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ),
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent', 'index'],
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@types',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['@types'],
        },
      ],
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      'react/function-component-definition': 'off',
      'import/no-anonymous-default-export': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'lines-around-comment': [
        'error',
        {
          beforeLineComment: true,
          beforeBlockComment: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          allowArrayStart: true,
        },
      ],
      'newline-before-return': 'error',
      'import/newline-after-import': [
        'error',
        {
          count: 1,
        },
      ],
      '@typescript-eslint/ban-types': [
        'error',
        {
          extendDefaults: true,
          types: {
            '{}': false,
          },
        },
      ],
    },
  },
];

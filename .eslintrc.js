/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['plugin:react/recommended', 'next/core-web-vitals'],
  env: { es6: true },
  rules: {
    '@next/next/no-img-element': 'off',
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '@/common/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/modules/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'array-callback-return': [
      'error',
      {
        checkForEach: true,
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-anonymous-default-export': 'warn',
    'react/no-unknown-property': [
      'error',
      { ignore: ['css', 'global', 'jsx'] },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'no-console': 'warn',
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@next/next',
    '@typescript-eslint',
    'react',
    'simple-import-sort',
    'import',
    'unused-imports',
  ],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};

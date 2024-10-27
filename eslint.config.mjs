// eslint.config.mjs
import eslint from 'eslint';

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
    ],
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'indent': ['error', 2],
    },
  },
];

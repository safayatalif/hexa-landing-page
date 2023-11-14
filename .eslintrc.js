/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'pretter'],
  rules: {
    // Custom rules specific to your project
    // indent: ['error', 4], conflicts with prettier
    quotes: ['error', 'single'], // might need to remove it later on
    '@typescript-eslint/no-unused-vars': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    // 'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

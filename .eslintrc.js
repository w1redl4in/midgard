module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'no-useless-constructor': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-console': 'off',
    'wrap-iife': 'off',
    'func-names': 'off',
    'no-unused-vars': 'off',
    'max-classes-per-file': 'off',
    'object-curly-newline': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

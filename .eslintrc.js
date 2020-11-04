module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    // 'plugin:jsdoc/recommended',
  ],
  plugins: [
    'simple-import-sort',
    // 'jsdoc',
    'only-warn',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'all', argsIgnorePattern: '^_' },
    ],
    // 'jsdoc/require-description': 'warn',
    // 'jsdoc/require-description-complete-sentence': 'warn',
    // 'jsdoc/require-param-type': 'off',
    // 'jsdoc/require-returns': 'off',
    // 'jsdoc/require-returns-type': 'off',
    'no-return-await': 'error',
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: false,
    es2022: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: 'module',
    lib: ['es2022'],
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsdoc',
    'prettier',
    'regexp',
    'security',
    'vue',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsdoc/recommended',
    'plugin:security/recommended',
    'plugin:regexp/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script[setup]', 'template', 'style[scoped]'],
      },
    ],
  },
};

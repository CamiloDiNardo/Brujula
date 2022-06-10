module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    quotes: 'warn',
    semi: 'off',
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
    indent: 'off',
    'comma-dangle': 'off',
  },
};

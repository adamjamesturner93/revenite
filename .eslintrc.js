module.exports = {
  parser: '@typescript-eslint/parser', // Tells ESLint to use this parser installed at previous step
  parserOptions: {
    ecmaVersion: 2021, // The version of ECMAScript you are using
    sourceType: 'module', // Enables ECMAScript modules
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Specify rules for React
    'plugin:react-hooks/recommended', // Specify rules for React hooks
    'plugin:@typescript-eslint/recommended', // Specify rules for Typescript
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // This is where you can disable/customize some of the rules specified by the plugins
  },
};

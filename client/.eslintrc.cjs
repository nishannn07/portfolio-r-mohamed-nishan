// /client/.eslintrc.cjs
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime', // If using new JSX transform
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended', // Add prettier integration
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } }, // Specify React version
    plugins: ['react-refresh', 'prettier'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off', // Disable prop-types rule if not using PropTypes
      'react/react-in-jsx-scope': 'off', // Disable if using new JSX transform
      'prettier/prettier': 'warn', // Show Prettier issues as warnings
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Warn about unused vars
    },
  }
  
  
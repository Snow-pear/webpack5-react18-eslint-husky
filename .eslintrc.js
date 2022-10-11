module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/jsx-uses-react': 2 //解决warning 'React' is defined but never used @typescript-eslint/no-unused-vars
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

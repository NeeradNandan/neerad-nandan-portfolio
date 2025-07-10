import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import reactPlugin from 'eslint-plugin-react'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react': reactPlugin,
    },
    rules: {
  'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]|^(motion|gsap|three)$' }],
  'react/no-unknown-property': 'error',
  'react/jsx-no-undef': 'error',
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
  },
])
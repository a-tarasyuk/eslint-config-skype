module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  plugins: [
    'react'
  ],
  rules: {
    'jsx-curly-spacing': [
      'error',
      'always'
    ],
    'jsx-equals-spacing': [
      'error',
      'never'
    ],
    'no-danger': 'error',
  }
}
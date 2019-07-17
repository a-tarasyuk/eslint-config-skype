module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-curly-spacing': [
      'error',
      'always'
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never'
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'error',
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
  }
}
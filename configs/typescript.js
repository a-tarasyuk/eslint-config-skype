module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  root: true,
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'comma-dangle': [
      'error',
      'never'
    ],
    'constructor-super': 'error',
    'curly': [
      'error',
      'all'
    ],
    'eol-last': [
      'error',
      'always'
    ],
    'eqeqeq': [
      'error',
      'always',
      {
        'null': 'ignore'
      }
    ],
    'for-direction': 'error',
    'getter-return': 'error',
    'guard-for-in': 'error',
    'max-len': [
      'error',
      {
        'code': 140
      }
    ],
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-self-assign': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'no-undef': 'error',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-escape': 'error',
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],
    'radix': [
      'error',
      'always'
    ],
    'require-yield': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    /** TypeScript related rules */
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    'camelcase': 'off',
    '@typescript-eslint/camelcase': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        'allowExpressions': true
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'accessibility': 'no-public'
      }
    ],
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      4,
      {
        'FunctionExpression': {
          'parameters': 2,
          'body': 1
        },
        'FunctionDeclaration': {
          'parameters': 2,
          'body': 1
        }
      }
    ],
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': [
      'error',
      {
        'allows': [
          'private',
          'protected',
          'private readonly',
          'protected readonly',
        ]
      }
    ],
    '@typescript-eslint/no-triple-slash-reference': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'args': 'none'
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        'classes': false,
        'functions': false
      }
    ],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-interface': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    'semi': 'off',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error'
  }
}
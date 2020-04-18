module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    __resources: true
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'

  ],
  // add your custom rules here
  rules: {
    // StandardJS — The Rules
    "indent": ["error", 2, { "SwitchCase": 1 }], // 2 spaces – for indentation
    "max-len": ["error", { "code": 120 }],
    // "no-console": "off",
    "arrow-parens": ["error", "as-needed"],
    // "curly": ["error", "multi-line"],
    "import/no-extraneous-dependencies": "off",
    // "require-await": 0,

    "global-require": 0,
    'import/no-unresolved': 0,
    'import/newline-after-import': 0,
    'no-underscore-dangle': 0,

    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": 0,
    'nuxt/no-cjs-in-config': 'off',
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', { 'named': 'never' }],
    'curly': ['error', 'multi-line'],
    'vue/order-in-components': ['error'],
    'vue/require-component-is': 'off',
    'require-await': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}

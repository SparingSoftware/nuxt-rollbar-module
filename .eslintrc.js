module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: ['standard', 'prettier', 'plugin:vue/recommended'],
  plugins: ['jest', 'vue'],
  rules: {
    'vue/multi-word-component-names': 0
  },
  globals: {
    'jest/globals': true,
    jasmine: true
  }
}

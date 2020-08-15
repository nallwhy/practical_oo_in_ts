module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "semi": ["error", "never"],
    "indent": ["error", 4]
  },
  ignorePatterns: ["*.js"]
}

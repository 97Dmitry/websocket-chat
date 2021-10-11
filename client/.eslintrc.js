module.exports = {
  root: true,
  env: {
    // node: true,
    // browser: true,
    // es2021: true,
  },
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "import",
    "react",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/return-await": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/quotes": "off",
    "quotes": ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
    "quote-props": ["error", "consistent-as-needed"],
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};

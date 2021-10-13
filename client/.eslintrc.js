module.exports = {
  root: true,
  env: {
    "node": true,
    "browser": true,
    "es2021": true,
    "jest/globals": true,
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "jest",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:jest/all",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json"],
      jsx: true,
    },
    ecmaVersion: 2021,
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
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "max-len": ["error", { code: 100, ignoreComments: true }],

    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",

  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    jest: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
      version: require("jest/package.json").version,
    },
  },
};

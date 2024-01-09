module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ["*.d.ts"],
  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:astro/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  globals: {
    astroHTML: true,
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      2,
      {
        prefer: "type-imports",
      },
    ],
    "import/order": [2, { alphabetize: { order: "asc" } }],
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "astro/no-set-html-directive": "error",
      },
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
    },
  ],
};

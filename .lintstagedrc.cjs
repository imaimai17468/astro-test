// @ts-check

/** @type {import('lint-staged').Config} */
module.exports = {
  '*.{js,cjs,ts,jsx,tsx,astro}': ['eslint --fix', 'prettier --write --plugin=prettier-plugin-astro'],
  '*.{md,html,json,yaml,yml}': ['prettier --write --plugin=prettier-plugin-astro'],
}

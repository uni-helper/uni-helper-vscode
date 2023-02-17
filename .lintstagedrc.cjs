module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{js,cjs,mjs,ts,cts,mts,json}': 'eslint --fix --cache',
};

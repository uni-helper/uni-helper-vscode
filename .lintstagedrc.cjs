module.exports = {
  '*.md': 'markdownlint --fix --ignore-path=.gitignore',
  '*.{js,cjs,mjs,ts,cts,mts,json}': 'eslint --fix --cache --ignore-path=.gitignore',
};

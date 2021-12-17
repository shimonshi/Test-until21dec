module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'eol-last': ['error', 'always'],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    curly: 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-before-blocks': 'error',
    'template-curly-spacing': 'error',
    'block-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-dupe-else-if': 'error',
    'no-await-in-loop': 'error',
  },
};

/** @type {import("prettier").Config} */
const config = {
  useTabs: false,
  singleQuote: false,
  semi: true,
  endOfLine: 'lf',
  arrowParens: 'always',
  overrides: [
    {
      files: '*.js',
      options: {
        printWidth: 100,
        singleQuote: true,
      },
    },
  ],
};

export default config;

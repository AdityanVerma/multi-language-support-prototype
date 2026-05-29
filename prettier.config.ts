import type { Config } from 'prettier';

const config: Config = {
  plugins: ['prettier-plugin-tailwindcss'],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
};

export default config;
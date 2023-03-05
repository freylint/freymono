const srcs = "./src/**/*.{js,ts,jsx,tsx,mdx}";

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [srcs],
  content: [
    srcs,
  ],
  theme: require('../pimeja/theme.js'),
  plugins: [],
}

const srcs = "./src/**/*.{js,ts,jsx,tsx,mdx}";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    srcs,
  ],
  theme: require('../pimeja/theme.js'),
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

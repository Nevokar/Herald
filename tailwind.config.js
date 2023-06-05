/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'beige': '#ebebec',
    },
    extend: {
      fontFamily: {
        nexa: ['NexaText', ...defaultTheme.fontFamily.sans],
     },
     fontWeight: {
      'book': 300,
      'regular': 400,
      'bold': 500,
      'heavy': 700,
      'black': 900,
     }
    },
  },
  plugins: [],
}
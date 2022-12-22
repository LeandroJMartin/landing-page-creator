config = require('./src/inc/config.json');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: config.colors.primary,
        second: config.colors.second,
        third: config.colors.third,
        base: config.colors.base
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
};

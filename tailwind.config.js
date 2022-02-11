const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
  },
  plugins: [],
};

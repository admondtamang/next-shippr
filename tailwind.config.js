const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/pages/**/*.{html,js}', './src/components/**/*.{html,js}'],
  theme: {
    colors: {
      primary: colors.cyan,
      secondary: colors.green,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      transparent: 'transparent',
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      outline: {
        'no-chrome': 'none',
      },
      transitionTimingFunction: {
        'in-out-hard': 'cubic-bezier(.77, 0, .175, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};

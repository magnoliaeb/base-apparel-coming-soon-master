const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      gray: colors.coolGray,
      'red-dark': 'hsl(0, 6%, 24%)',
      'red-desaturated': 'hsl(0, 36%, 70%)',
      'red-soft': 'hsl(0, 93%, 68%)',
      white: colors.white,
    },
    screens: {
      'sm': '375px',
      'md': '1024px',
    },
    fontFamily: {
      body: ['Josefin Sans']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

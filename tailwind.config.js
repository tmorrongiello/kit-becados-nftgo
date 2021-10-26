const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'axie-ng': "url('~/public/img/axie.jpg')"
      }),
    
    colors: {
      transparent:'transparent',
      black: colors.black,
      white: colors.white,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warGray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      
    },
    fontFamily: {
      body: ['Bebas Neue'],
      alfa: ['Alfa Slab One'],
      fredoka: ['Fredoka One'],
      gluten: ['Gluten'],
      lucky: ['Luckiest Guy'],
      secular: ['Secular One']
    }
  },
    variants: {
      extend: {},
    },
  },
  plugins: [],
}

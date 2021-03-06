module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landing-page': "url('./img/landing-page.png')",
        'in-action': "url('./img/in-action.png')",
      })
    },
    screens: {
      'xxl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    padding: {
      sm: '.5em',
      md: '1em',
      lg: '2em',
      xl: '4em',
      xxl: '8em',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

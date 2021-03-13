module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xxs': '.55rem'
      },
      'width': {
         'big': '30rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
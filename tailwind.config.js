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
      },
      'colors': {
        'blue#1': '#00203FFF',
        'green#1': '#ADEFD1FF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
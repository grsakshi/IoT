module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
          // Simple 3 column grid
        '3': 'repeat(3, minmax(0, 1fr))',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
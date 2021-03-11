module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {},
    backgroundColor: theme => ({
      'primary': '#caf0f8',
      'secondary': '#023e8a',
      'lightskyblue': '#90e0ef',
      'neon': '#00b4d8',
      'white': '#FFFFFF'
    }),
    textColor: {
      'primary': '#caf0f8',
      'secondary': '#023e8a',
      'lightskyblue': '#90e0ef',
      'white': '#FFFFFF',
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
        textColor: ['active'],
      },
    },
    plugins: [],
  },
}
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff7b1e',
        secondary: '#5F259F',
        tertiary: '#00b2a9',
      },
      backgroundImage: theme => ({
        home: "url('/images/bg_home.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

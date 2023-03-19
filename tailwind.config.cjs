/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html', './pages/*.js'],
  theme: {
    extend: {
      colors: {
        darkGray: 'rgba(255, 255, 255, 0.2)',
      },
      width: {
        62: '3.875',
        124: '7.75em',
      },
      height: {
        50: '3.125em',
        25: '1.563em',
      },
      spacing: {
        99: '6.188em',
        38: '2.375em',
        34: '2.125em',
        27: '1.688em',
        90: '5.625em',
        64: '3.875em',
        45: '2.813em',
      },
      maxWidth: {
        152: '9.5em',
        362: '22.625em',
        802: '50.125em',
      },
      fontFamily: {
        sans: ['Manrope', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

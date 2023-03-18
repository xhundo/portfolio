/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/.html', './pages/*.js'],
  theme: {
    extend: {
      colors: {
        darkGray: 'hsl(0, 0%, 10%)',
      },
    },
  },
  plugins: [],
};

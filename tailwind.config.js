/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'Oval': "url('Image/Oval.png')",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-app': "url('img/colorful-flow-bg.jpeg')",
      }
    },
  },
  plugins: [],
}


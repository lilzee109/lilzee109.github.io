/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#fa8f09',
      },
      screens: {
        "360": "360px",
        "600": "600px"
      }
    },
  },
  plugins: [],
}

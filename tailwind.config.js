/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '4px 10px 45px rgba(191, 145, 250, .5)'
      }
    },
  },
  plugins: [],
}

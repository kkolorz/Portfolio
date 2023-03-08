/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '4px 10px 45px rgba(191, 145, 250, .5)',
      },
      boxShadow: {
        '3xl': '0 0 44px 34px rgba(0, 0, 0, .3)',
      }
    },
  },
  plugins: [],
}

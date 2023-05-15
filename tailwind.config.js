/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    fontFamily: {
     'satisfy': ['Satisfy','cursive']
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    fontFamily: {
      IgFont: "igfont"
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide", "tailwindcss-animate")],
};

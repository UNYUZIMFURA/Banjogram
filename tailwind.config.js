/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    fontFamily: {
      igfont: "IgFont"
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide", "tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-blue": "#1A143C",
        "custom-grey": "#F5F6F8",
        "custom-dark-grey": "#9693A5",
        "custom-orange": "#FF9357",
      },
    },
  },
  plugins: [],
};

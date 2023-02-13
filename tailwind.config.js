/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
        "roboto": ["Roboto", ...defaultTheme.fontFamily.sans],
        "lato": ["Lato", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "dark": "#202426",
        "light": "#FBFEF9",
        "primary": "#C76A25",
        "secondary": "#478978",
        "positive": "#4D8B31",
        "negative": "#A61B26",
        "secondary-light": " #55A086",
      },
      backgroundColor: {
        woods: "#ece4d4",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        customRed: "#FF1C4E",
        customLightRed: "#FF4C73",
        customDarkRed: "#FD083E",
        customLight: "#BFBFBF",
        customDark: "#141414",
        cardDark: "#202020"
      }
    },
  },
  plugins: [],
}

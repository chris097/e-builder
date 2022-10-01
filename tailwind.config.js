/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarygray: "#F5F6F7",
        basegray: "#393E4D",
        secondarygray: "#404553",
      },
      fontFamily: {
        opensans: "Poppins, sans-serif"
      }
    },
  },
  plugins: [],
}

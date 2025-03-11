/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Popins","sans-serif"],
        cursive:["Pacifico","Sriracha","cursive"],
        cursive2:["Sriracha", "cursive"]
      }
    },
  },
  plugins: [],
}


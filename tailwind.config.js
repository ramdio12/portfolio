/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headingColor: '#3e497a'
      },
      spacing: {
        cardHeight: "21rem"
      }
    },


  },
  plugins: [],
}
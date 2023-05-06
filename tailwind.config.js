/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btnprimary: "#4c7397",
        btnsecondary: "#02DBBD",
        secondary:{
          900: "#131517",
          100: "#1d2029",
        }

      }
    },
  },
  plugins: [],
}

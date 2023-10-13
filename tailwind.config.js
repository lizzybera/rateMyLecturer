/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens : {
        mobile : {max : "480px"},
        mobileSmall : {max : "320px"},
        tab : {min : "620px"},
        desktop : {min : "680px"}
      }
    },
  },
  plugins: [],
}


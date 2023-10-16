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
        desktop : {min : "680px"},

        headerSmall : {max : "320px"},
        headerMedium : {max : "768px"},
        headerLarge : {max : "1269px"},
        
      }
    },
  },
  plugins: [],
}

// small max 768px 
// medium max 1024px


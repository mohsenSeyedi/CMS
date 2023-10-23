/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-color" : "#471AAA",
        "white-color" : "#ffffff",
        "white-50-color" : "#f0f0f0"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': "#f5f7fa",
        'neutralDGrey': '#4d4d4d',
        'brandPrimary': "#4caf4f",
        'neutraSilver': "#f5f7fa"
      }
    },
  },
  plugins: [],
}
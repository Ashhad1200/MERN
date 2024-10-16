/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        default: '#000000', // Dark background color
      },
      textColor: {
        default: '#ffffff', // White text color
      },
    },
  },
  plugins: [],
}

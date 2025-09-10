/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#047857", // deep green
        secondary: "#A7F3D0", // mint green
      },
    },
  },
  plugins: [],
}

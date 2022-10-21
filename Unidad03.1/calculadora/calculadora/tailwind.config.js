/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fb923c',
          500: '#f97316',
        },
        gray: {
          50: '#9ca3af',
          500: '#6b7280',
        },
        black: "#000000",
        white: "#FFFFFF",
      }
    }
  },
  plugins: [],
}

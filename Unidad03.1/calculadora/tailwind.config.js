/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-ios": "#fca503",
        "orange-ios-100": "#ad7102",
        "gray-ios": "#a6a5a2",
        "gray-ios-100": "#757574",
        "grayfull-ios": "#3d3d3c",
        "grayfull-ios-100": "#2b2b2b",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B46C1',
        secondary: '#1A1A1A',
        'dark-gray': '#2D2D2D',
        'light-gray': '#4A4A4A',
      },
    },
  },
  plugins: [],
}

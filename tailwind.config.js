/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '420px',
        '3xl' : '1920px',
        '4xl' : '2520px',
        '5xl' : '3480px',
      }
    },
  },
  plugins: [],
}

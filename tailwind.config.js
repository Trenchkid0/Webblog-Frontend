/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '54rem': '54rem',
      },
      fontFamily: {
        'sans': ['Patrick Hand', 'Arial', 'sans-serif']
      },
      height: {
        '35': '35rem',
        '38': '38rem',
        '20': '20rem',
      }
    },
  },
  plugins: [],
}


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
        '32': '35rem',
        '20': '20rem',
      }
    },
  },
  plugins: [],
}


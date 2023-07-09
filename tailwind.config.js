/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      md: '768px',
      lg: '1024px',
      xl: '1080px'
    },
    extend: {
      margin: {
        '54rem': '54rem',
        '58rem': '65rem',
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


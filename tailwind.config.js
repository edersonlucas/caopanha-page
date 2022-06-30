/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      screens: {
        'min': '480px',
      },
      backgroundImage: {
        dogFood: 'url(/src/assets/img/doog-food.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        yellow: {
          300: '#FCD34D',
          500: '#FBBF24',
          800: '#F59E0B',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
          600: '#ED1C4E',
          700: '#E30A3E'
        },
      },
    },
  },
  plugins: [
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      sans: 
      ['Inter', 'sans-serif'],
      'Allenoire': ['Allenoire', 'sans-serif']
    },
    extend: {
      colors: {
        st: {
          green: '#01E898',
          sky: '#13B1E8',
          black: '#0D0D0D',
          gray: '#171717'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

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
          sky: '#13B1E8'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

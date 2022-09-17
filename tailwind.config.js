/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'border-clr':'#e5e7eb' 
      },
      fontFamily:{
        'secondary':['Comfortaa', 'cursive' ],
        'primary':['Poppins', 'sans-serif']
      },
      boxShadow:{
        '3xl':'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;',
        '4xl':'rgba(0, 0, 0, 0.15) 0px 2px 8px;',
        '5xl':'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;',
        '6xl':'rgba(0, 0, 0, 0.16) 0px 1px 4px;'
      }
    },
   
  },
  plugins: [],
}

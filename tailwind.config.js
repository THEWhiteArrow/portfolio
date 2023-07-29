/** @type {import('tailwindcss').Config} */

const dimenstions = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '1/4': '25%',
  '1/5': '20%',
  '1/6': '16.666667%',
  '1/7': '14.285714%',
  '1/8': '12.5%',
  '1/9': '11.111111%',
  '1/10': '10%',
  '1/11': '9.090909%',
  '1/12': '8.333333%',
  '1': '1rem',
  '2': '2rem',
  '3': '3rem',
  '4': '4rem',
  '5': '5rem',
  '6': '6rem',
  '7': '7rem',
  '8': '8rem',
  '9': '9rem',
  '10': '10rem',
  '15': '15rem',
  '20': '20rem',
  '25': '25rem',
  '30': '30rem',
  '40': '40rem',
  '50': '50rem',
  '60': '60rem',
  '70': '70rem',
  '80': '80rem',
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale:{
        '115': '1.15'
      }
    },
    minWidth: dimenstions,
    maxWidth: dimenstions,
    minHeight: dimenstions,
    maxHeight: dimenstions,
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000000d5',
      'white': '#ffffff'
    },
  },

  plugins: [],
}
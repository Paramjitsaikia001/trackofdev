/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scrollbarTrack: '#040803',
        scrollbarThumb: '#292C28',
        scrollbarBg: '#292C28', // Customize background color for scrollbar here
        primary: {
          blue: '#051250',
          cyan: '#00ffea',
          purple: '#8387C4',
          dark: '#021526',
          bg: '#03346E'
        },
        secondary: {
          gray: '#31ffff',
          light: '#ffffff48'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
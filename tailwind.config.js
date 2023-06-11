/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  daisyui: {
    themes: ['light']
  },
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'hk-grotesk': ['Hanken Grotesk', 'sans-serif']
      },
      colors:{
        custom: {
          100: '#D2F1E8',
          200: '#A4E4D1',
          300: '#76D7BA',
          400: '#48C9A9',
          500: '#4ECCA3',
          600: '#39A88F',
          700: '#2B7A6D',
          800: '#1D4F3A',
          900: '#007C5C'
        }
      }
    },
  },
  plugins: [
    require('daisyui')
  ]

  }

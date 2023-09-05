/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          default: '#808042',
          dark: '#5a5a2e',
        },
        'secondary': {
          default: '#425280',
          dark: '#2e395a',
        },
        'tertiary': {
          default: '#804242',
        }
      },
    },
  },
  plugins: [],
}


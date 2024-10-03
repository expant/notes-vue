/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      keyframes: {
        'show-modal': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'show-note': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'show-modal': 'show-modal 0.3s forwards',
        'show-note': 'show-note 0.5s forwards',
      }
    },
  },
  plugins: [],
}


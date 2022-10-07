/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'base': ['Poppins', 'sans-serif'],
        'title': ['Roboto', 'sans-serif'],
      },
      animation: {
        'slide': 'slide 9s linear 2s forwards',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        }
      },
    },
  },
  plugins: [],
}

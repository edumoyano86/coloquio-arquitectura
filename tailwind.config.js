/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
        colors: {
            'neon-yellow': '#facc15',
            'neon-green': '#4ade80',
            'neon-blue': '#38bdf8',
            'neon-purple': '#c084fc',
            'dark-bg': '#0a0f1c',
        },
        fontFamily: {
            sans: ['Outfit', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

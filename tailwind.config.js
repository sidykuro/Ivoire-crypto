/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivoire-violet': '#8A5CF5',
        'ivoire-dark': '#0F0F0F',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['DM Serif Display', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

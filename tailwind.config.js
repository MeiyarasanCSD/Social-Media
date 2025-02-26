/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1a1625',
          secondary: '#242038',
          accent: '#725AC1',
          text: '#E8E8E8'
        }
      }
    },
  },
  plugins: [],
};
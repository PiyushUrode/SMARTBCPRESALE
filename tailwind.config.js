/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow1': '5px 5px 11px 5px rgba(0, 200, 199, 0.31)',
      },
      colors: {
        customTeal: '#00E0C7',
        customTealhover: '#4CC9F0',
        cadetblue: '#5f9ea0',
        'custom-black': 'rgba(0, 0, 0, 1)',
        'custom-mint': 'rgba(136, 250, 222, 1)',
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(136, 250, 222, 1) 90%)',
      },

      screens: {
        'phone': { 'max': '550px' },
        'tablet': { 'max': '768px' },
        'laptop': { 'max': '1024px' },
        'desktop': { 'max': '1200px' },
      },

      fontSize: {
        'h1': '3.5rem', // Adjust as needed
        'h2': '2.5rem',
        'h3': '1.4rem',
        'p': '1.4rem',
      },
      fontWeight: {
        'h1': '800',
        'h2': '700',
        'h3': '600',
        'p': '400',
      },
    },
  },
  plugins: [],
}
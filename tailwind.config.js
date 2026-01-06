/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#C8F000',
        charcoal: '#0B0B0F',
        slate: '#17171D',
        mist: '#A6A6B0'
      },
      boxShadow: {
        subtle: '0 20px 60px -24px rgba(0,0,0,0.45)'
      },
      borderRadius: {
        xl: '1.25rem'
      }
    },
  },
  plugins: [],
};

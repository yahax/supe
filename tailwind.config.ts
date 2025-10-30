import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#00D2B8',
        accent: '#F5A524',
        muted: '#F1F5F9',
        text: '#0B1221'
      },
      borderRadius: { xl: '20px', lg: '14px', md: '10px', sm: '8px' }
    }
  },
  plugins: []
} satisfies Config

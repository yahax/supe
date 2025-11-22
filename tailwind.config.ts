import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#050507',
        surface: '#101214',
        accent: {
          primary: '#2F6BFF',
          secondary: '#C5A56E'
        },
        danger: '#FF4B4B',
        text: {
          primary: '#FFFFFF',
          secondary: '#A7B0C0'
        },
        border: {
          soft: 'rgba(255,255,255,0.08)'
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.03em'
      },
      boxShadow: {
        soft: '0 22px 80px rgba(0,0,0,0.75)',
        glow: '0 0 40px rgba(47,107,255,0.7)'
      },
      borderRadius: {
        lg: '24px',
        xl: '32px'
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #2F6BFF, #5B8CFF)'
      }
    }
  },
  plugins: []
};

export default config;

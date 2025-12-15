import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0b0c10',
        neonBlue: '#4dd0ff',
        electricPurple: '#c084fc',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(77, 208, 255, 0.08), transparent 25%), radial-gradient(circle at 80% 0%, rgba(192, 132, 252, 0.1), transparent 25%), radial-gradient(circle at 50% 80%, rgba(77, 208, 255, 0.06), transparent 30%)',
        noise: "url('data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 400 400\\"><filter id=\\"n\\"><feTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.65\\" numOctaves=\\"3\\" stitchTiles=\\"stitch\\"/></filter><rect width=\\"100%\\" height=\\"100%\\" filter=\\"url(%23n)\\" opacity=\\"0.16\\"/></svg>')",
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(77, 208, 255, 0.35)',
        'glow-purple': '0 0 40px rgba(192, 132, 252, 0.35)',
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;

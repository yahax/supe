import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#06070d",
        foreground: "#e9ecf5",
        accent: {
          DEFAULT: "#7c5dff",
          muted: "#6ad9d6",
        },
      },
      boxShadow: {
        glow: "0 10px 50px rgba(124, 93, 255, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

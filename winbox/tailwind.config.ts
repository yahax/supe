import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem"
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A",
          foreground: "#FFFFFF"
        },
        secondary: {
          DEFAULT: "#00D2B8",
          foreground: "#0B1221"
        },
        accent: {
          DEFAULT: "#F5A524",
          foreground: "#0B1221"
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#0B1221"
        },
        background: "#FFFFFF",
        foreground: "#0B1221"
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans]
      },
      borderRadius: {
        xl: "20px",
        lg: "16px",
        md: "12px",
        sm: "8px"
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(15, 23, 42, 0.35)"
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;

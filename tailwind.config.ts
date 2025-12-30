import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#CEDC35",
        ink: "#0B0F1A"
      },
      boxShadow: {
        soft: "0 15px 50px -25px rgba(0,0,0,0.25)",
        card: "0 12px 40px -30px rgba(0,0,0,0.35)"
      },
      borderRadius: {
        xl2: "18px"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' })
  ]
};

export default config;

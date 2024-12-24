import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'game-purple': '#2D1B69',
        'game-blue': '#1E90FF',
        'game-pink': '#FF10F0',
        'game-dark': '#1a1a1a',
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'typing': 'typing 2s steps(20, end)',
        'blink': 'blink .5s step-end infinite alternate',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
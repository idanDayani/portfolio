/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      smallDevice: "360px",
      bigDevice: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "var(--font--jetbrainsMono)",
    },
    extend: {
      keyframes: {
        'rotate-right-left': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        'rotate-right-left': 'rotate-right-left 0.5s ease-in-out',
      },
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
        yellow: {
          DEFAULT: "#ff7f50",
          1000: "#CCFF00",
        },
      },
    },
  },
  plugins: [],
};

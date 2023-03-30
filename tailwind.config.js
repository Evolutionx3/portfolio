/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#141414",
        lightGray: "#e8e8e8",
        gray: "#b9b9b9",
        red: "#FF3A5E",
        redDark: "#cc2e4b",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

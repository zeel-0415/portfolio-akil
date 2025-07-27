/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#111111",
        accent: "#00FFF0",
        glow: "#00f5ff",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0,255,240,0.5)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0CC8A8",
        darkBg: "#0F0F0F",
        darkCard: "#1A1A1A",
        critical: "#ef4444",
        high: "#f97316",
        medium: "#facc15",
        low: "#22c55e",
      },
    },
  },
  plugins: [],
}
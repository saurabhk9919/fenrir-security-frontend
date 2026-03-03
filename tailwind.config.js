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
      backgroundImage: {
        'gradient-hero': 'linear-gradient(140deg, rgba(7,12,18,0) 40%, rgba(63,193,186,0.46) 53%, rgba(73,184,210,0.34) 60%, rgba(7,12,18,0) 72%), linear-gradient(140deg, rgba(7,12,18,0) 56%, rgba(255,178,96,0.88) 68%, rgba(255,112,45,0.62) 75%, rgba(110,36,28,0.38) 83%, rgba(7,12,18,0) 92%), linear-gradient(140deg, #070c12 0%, #0b1219 34%, #0b1318 56%, #0a0f15 100%)',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- Agregado para soporte de next-themes
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
        sans: ['Roboto Mono', 'monospace'], // Si quieres que TODO use Roboto Mono
      },
    },
  },
  plugins: [],
} 
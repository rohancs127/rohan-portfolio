// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0A192F',
        'navy-light': '#112240',
        'navy-lighter': '#233554',
        'slate-lightest': '#CCD6F6',
        'slate-light': '#A8B2D1',
        'slate-dark': '#8892B0',
        'cyan-400': '#64FFDA',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'mono': ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding:{
        '128': '32rem'
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "7rem",
      },
      colors: {
        "highlight-blue": "#57d9d3",
      },
    },
  },
  plugins: [],
};

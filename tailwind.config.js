/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC7A46",
        secondary: "#2447F9",
        "secondary-dark": "#34364A",
      },
    },
  },
  plugins: [],
};

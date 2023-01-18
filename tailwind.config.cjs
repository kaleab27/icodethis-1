/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17213F",
        secondary: "#0F162B",
      },
      aspectRatio: {
        "3/4": "3/4",
      },
    },
  },
  plugins: [],
};

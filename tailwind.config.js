/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A3042",
        secondary: "#DB9D47",
        bgPrimary: "#172121",
        bgSecondary: "#212021",
        bgThird: "#121414",
        bgButton: "#6D4E1B",
      },
    },
  },
  plugins: [],
};

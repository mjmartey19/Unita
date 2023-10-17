/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#042943",
        secondary: "#0063A7",
        tertiary: "#FDCC6F",
        "black-100": "#242429",
        'bg-color': '#e4eff4',
        'gray-800': '#54595F',
      },
      boxShadow: {
        card: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
      fontFamily: {
          "Mulish": "Mulish",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}


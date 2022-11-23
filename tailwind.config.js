/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        funTheme: {
          primary: "#2f333A", //dark-gray-black
          secondary: "#FF7004", //orange
          accent: "#212121", //black
          neutral: "#000000", //text-black
          info:"#E7E7E7",//light gray
          "base-100": "#ffffff", // white
        },
      },
      {
        dark: {
          "base-100": "#1F2937", //bg-black
          neutral: "#ffffff", //text-white
          accent: "#1F2937", // white
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

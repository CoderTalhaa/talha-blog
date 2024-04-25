/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Anto: ["Anta", "sans-serif"],
        Ubanta: ["Ubuntu", "sans-serif"],
        skill: ["Rubik Glitch Pop", "sans-serif"],
        philos: ["Philosopher", "sans-serif"],
        Angkor: ["Angkor", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro", "night","luxury"],
  },
};

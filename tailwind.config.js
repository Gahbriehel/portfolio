/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  safelist: [
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-500",
    "from-green-500",
    "to-teal-500",
    "from-orange-500",
    "to-red-500",

    {
      pattern: /bg-gradient-to-r/,
    },
    {
      pattern:
        /from-(blue|green|orange|red|purple|teal|emerald|cyan|indigo)-[45]00/,
      variants: ["hover", "dark"],
    },
    {
      pattern: /to-(purple|teal|red|emerald|cyan|indigo)-[45]00/,
      variants: ["hover", "dark"],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Pacifico", "cursive"],
        bold: ["Roboto", "sans-serif"],
        signika: ["Signika", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        nexafont: ["Nexa", "sans-serif"],
        playfairDisplay: ["Playfair Display", "serif"],
        pachang: ["Pachang", "sans-serif"],
      },
    },
  },
  plugins: [],
};

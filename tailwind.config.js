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
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        cursive: ["Pacifico", "cursive"],
        signika: ["Plus Jakarta Sans", "sans-serif"],
        roboto: ["Plus Jakarta Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Plus Jakarta Sans", "sans-serif"],
        lora: ["Playfair Display", "serif"],
        playfairDisplay: ["Playfair Display", "serif"],
        panchang: ["Playfair Display", "serif"],
      },
      colors: {
        amber: {
          500: "#f59e0b",
          600: "#d97706",
        },
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        savora: {
          orange: "#c94c1a",
          "orange-dark": "#b04216",
          cream: "#fdf6f0",
          ink: "#1a1a1a",
          muted: "#555555",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
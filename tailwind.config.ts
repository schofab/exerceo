import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6C8CFF",
          dark:    "#5470e8",
          light:   "#eef1ff",
        },
        warm: {
          DEFAULT: "#ff956b",
          light:   "#fff4ef",
        },
        mint: {
          DEFAULT: "#6BD6A6",
          light:   "#f0faf6",
        },
      },
    },
  },
  plugins: [],
};

export default config;

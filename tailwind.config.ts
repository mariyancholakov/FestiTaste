import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C0392B",
        accent: "#E67E22",
        cream: "#FDF6EC",
        "dark-green": "#1B4332",
        bg: "#FAFAF8",
      },
    },
  },
};

export default config;

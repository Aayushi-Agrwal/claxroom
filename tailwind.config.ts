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
        purple: "#AC87C5",
        "purple-dark": "#756AB6",
        "purple-light": "#756AB6",

        green: "#D2D180",
        "green-dark": "#B2B377",
        "green-light": "#E5E483",

        pink: "#F999B7",
        "pink-dark": "#F2789F",
        "pink-light": "#F9C5D5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

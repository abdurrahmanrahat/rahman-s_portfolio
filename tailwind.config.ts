import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ClashDisplay: ["ClashDisplay", "sans-serif"],
      },
      boxShadow: {
        "my-shadow": "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;",
      },
      colors: {
        primary: "#D8FE00",
        dark: "#080708", // black
        darkShed: "#151415",
        text: "#292929",
        "text-gray": "#999999",
        border: "#1f1f1f",
        // border: "#2e2e2e", // little bit more bright
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;

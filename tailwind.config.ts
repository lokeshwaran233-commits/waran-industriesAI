import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        waran: {
          ink: "#0B0C0E",
          graphite: "#1C1F24",
          steel: "#2A3038",
          paper: "#F4F1EA",
          mist: "#E7EBF1",
          white: "#FBFBFA",
          navy: "#142033",
          atmosphere: "#3A6EA5",
          sunrise: "#D7A35A",
          gold: "#C5A059",
          goldSoft: "#E0C48A",
          silver: "#C9CDD3",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        micro: "0.28em",
        section: "0.42em",
      },
      maxWidth: {
        content: "72rem",
        measure: "38rem",
      },
      transitionTimingFunction: {
        waran: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
